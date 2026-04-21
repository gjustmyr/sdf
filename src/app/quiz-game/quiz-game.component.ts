import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Question {
  id: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  time: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

interface Team {
  id: number;
  name: string;
  color: string;
  score: number;
  powerUps: PowerUp[];
  activeEffects: Effect[];
}

interface PowerUp {
  id: string;
  name: string;
  icon: string;
  description: string;
  type: 'offensive' | 'defensive' | 'boost';
}

interface Effect {
  type: string;
  icon: string;
  duration: number;
  value?: any;
}

@Component({
  selector: 'app-quiz-game',
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz-game.component.html',
  styleUrl: './quiz-game.component.css',
})
export class QuizGameComponent {
  // Game state
  gameState = signal<
    | 'setup'
    | 'powerup-test'
    | 'loading'
    | 'playing'
    | 'difficulty-reveal'
    | 'question'
    | 'result'
    | 'finished'
  >('loading');
  teams = signal<Team[]>([]);
  currentTeamIndex = signal(0);
  currentRound = signal(1);
  totalRounds = signal(5);

  // Question management
  allQuestions = signal<Question[]>([]);
  availableCards = signal<number[]>([]);
  usedQuestionIds = signal<number[]>([]); // Track used questions
  currentQuestion = signal<Question | null>(null);
  selectedAnswer = signal<string>('');
  timeRemaining = signal(0);
  timerInterval: any;
  hiddenOptions = signal<string[]>([]); // For 50/50 power-up

  // Setup form
  numTeams = signal(3);
  teamNames = signal<string[]>(['Team 1', 'Team 2', 'Team 3']);

  // Power-up selection
  showPowerUpModal = signal(false);
  showTargetModal = signal(false);
  selectedPowerUp: PowerUp | null = null;

  // Result display
  isCorrect = signal(false);
  showExplanation = signal(false);

  // Notification system
  notification = signal<string>('');
  showNotification = signal(false);

  // Lifeline tracking
  lifelineUsed = signal(false);

  constructor() {
    this.loadQuestions();
  }

  async loadQuestions() {
    try {
      console.log('Loading questions...');
      const response = await fetch('questions.json');
      console.log('Response status:', response.status);
      const questions = await response.json();
      console.log('Loaded questions:', questions.length);
      this.allQuestions.set(questions);
      this.gameState.set('setup');
    } catch (error) {
      console.error('Failed to load questions:', error);
      // Fallback to empty array or show error
      this.allQuestions.set([]);
      this.gameState.set('setup');
    }
  }

  getAllPowerUps(): PowerUp[] {
    return [
      // {
      //   id: 'time-freeze',
      //   name: 'Time Freeze',
      //   icon: '⏰',
      //   description: 'Reduce target team time by 15s',
      //   type: 'offensive',
      // },
      {
        id: 'point-stealer',
        name: 'Point Stealer',
        icon: '💰',
        description: 'Steal 50% of target points',
        type: 'offensive',
      },
      {
        id: 'shield',
        name: 'Shield',
        icon: '🛡️',
        description: 'Protect from attacks for 2 rounds',
        type: 'defensive',
      },
      {
        id: 'double-down',
        name: 'Double Down',
        icon: '⭐',
        description: 'Next correct answer worth 2x',
        type: 'boost',
      },
      // {
      //   id: 'sabotage',
      //   name: 'Sabotage',
      //   icon: '🔥',
      //   description: 'Cut target time in half',
      //   type: 'offensive',
      // },
      {
        id: 'point-bomb',
        name: 'Point Bomb',
        icon: '💣',
        description: 'All teams lose 500pts except you',
        type: 'offensive',
      },
      {
        id: 'multiplier',
        name: 'Multiplier Madness',
        icon: '🎯',
        description: 'Next 3 answers worth 3x',
        type: 'boost',
      },
      {
        id: 'swap',
        name: 'Swap Question',
        icon: '🔄',
        description: 'Get new question same difficulty',
        type: 'boost',
      },
      {
        id: 'fifty-fifty',
        name: '50/50',
        icon: '✂️',
        description: 'Remove 2 wrong answers',
        type: 'boost',
      },
      {
        id: 'lifeline',
        name: 'Lifeline',
        icon: '💡',
        description: 'Reveal answer (50% points)',
        type: 'boost',
      },
    ];
  }

  startGame() {
    const teams: Team[] = [];
    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
    const allPowerUps = this.getAllPowerUps();

    // Give ALL teams the SAME power-ups for fairness
    const gamePowerUps = this.getRandomPowerUps(allPowerUps, 5);

    for (let i = 0; i < this.numTeams(); i++) {
      teams.push({
        id: i + 1,
        name: this.teamNames()[i] || `Team ${i + 1}`,
        color: colors[i],
        score: 0,
        powerUps: [...gamePowerUps], // Same power-ups for everyone
        activeEffects: [],
      });
    }

    // Randomize the turn order for fairness
    const shuffledTeams = teams.sort(() => Math.random() - 0.5);
    this.teams.set(shuffledTeams);

    // Calculate total questions needed based on teams and rounds
    const totalQuestions = this.numTeams() * this.totalRounds();
    this.availableCards.set(Array.from({ length: totalQuestions }, (_, i) => i));
    this.gameState.set('powerup-test');
  }

  startPlaying() {
    this.gameState.set('loading');
    // Show loading animation for 3 seconds
    setTimeout(() => {
      this.gameState.set('playing');
    }, 3000);
  }
  startQuestion() {
    this.gameState.set('question');
    this.startTimer();
  }

  getRandomPowerUps(allPowerUps: PowerUp[], count: number): PowerUp[] {
    const shuffled = [...allPowerUps].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  selectCard(cardIndex: number) {
    const cards = this.availableCards();
    if (!cards.includes(cardIndex)) return;

    // Remove card from available
    this.availableCards.set(cards.filter((c) => c !== cardIndex));

    // Get random question
    const question = this.getRandomQuestion();
    this.currentQuestion.set(question);

    // Apply time modifications from effects
    let time = question.time;
    const teams = this.teams();
    const currentTeam = teams[this.currentTeamIndex()];

    console.log('selectCard - Current team effects:', currentTeam.activeEffects);

    // Check for time-freeze effect (fixed time)
    const timeEffect = currentTeam.activeEffects.find((e) => e.type === 'time-reduce');
    if (timeEffect) {
      const originalTime = question.time;
      time = timeEffect.value;
      // Remove the effect after use
      currentTeam.activeEffects = currentTeam.activeEffects.filter((e) => e.type !== 'time-reduce');

      // Show notification about time reduction
      this.showNotificationMessage(
        `⏰ ${currentTeam.name} has reduced time! ${originalTime}s → ${time}s`,
      );
    }

    // Check for sabotage effect (percentage reduction)
    const sabotageEffect = currentTeam.activeEffects.find((e) => e.type === 'sabotage');
    if (sabotageEffect) {
      const originalTime = time;
      time = Math.floor(time * sabotageEffect.value);
      // Remove the effect after use
      currentTeam.activeEffects = currentTeam.activeEffects.filter((e) => e.type !== 'sabotage');

      // Show notification about sabotage
      this.showNotificationMessage(
        `🔥 ${currentTeam.name} was sabotaged! ${originalTime}s → ${time}s`,
      );
    }

    this.teams.set([...teams]); // Update teams state
    this.timeRemaining.set(time);
    this.selectedAnswer.set('');
    this.hiddenOptions.set([]); // Reset hidden options
    this.lifelineUsed.set(false); // Reset lifeline flag
    this.gameState.set('difficulty-reveal'); // Show difficulty first
  }

  getRandomQuestion(): Question {
    const questions = this.allQuestions();
    const usedIds = this.usedQuestionIds();

    // Filter out already used questions
    const availableQuestions = questions.filter((q) => !usedIds.includes(q.id));

    // If all questions have been used, reset the pool
    if (availableQuestions.length === 0) {
      this.usedQuestionIds.set([]);
      return this.getRandomQuestion();
    }

    // Pick a random question from available ones
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];

    // Mark this question as used
    this.usedQuestionIds.set([...usedIds, selectedQuestion.id]);

    return selectedQuestion;
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      const time = this.timeRemaining();
      if (time <= 0) {
        this.submitAnswer();
      } else {
        this.timeRemaining.set(time - 1);
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  submitAnswer() {
    this.stopTimer();
    const question = this.currentQuestion();
    if (!question) return;

    const correct = this.selectedAnswer() === question.correct;
    this.isCorrect.set(correct);

    if (correct) {
      // If lifeline was used, award only 50% points
      const points = this.lifelineUsed() ? Math.floor(question.points / 2) : question.points;
      this.awardPoints(points);

      if (this.lifelineUsed()) {
        const currentTeam = this.teams()[this.currentTeamIndex()];
        this.showNotificationMessage(
          `${currentTeam.name} earned ${points} points (50% due to Lifeline) 💡`,
        );
      }
    }

    this.gameState.set('result');
  }

  awardPoints(basePoints: number) {
    const teams = this.teams();
    const currentTeam = teams[this.currentTeamIndex()];

    let points = basePoints;
    let appliedMultiplier = 1;
    let multiplierName = '';

    // Check for active multipliers and use only the highest one
    const doubleEffect = currentTeam.activeEffects.find((e) => e.type === 'double');
    const multiplierEffect = currentTeam.activeEffects.find((e) => e.type === 'multiplier');

    // Determine which multiplier to use (highest wins)
    if (multiplierEffect && appliedMultiplier < 3) {
      appliedMultiplier = 3;
      multiplierName = 'Multiplier Madness (x3)';
      multiplierEffect.duration--;
      if (multiplierEffect.duration <= 0) {
        currentTeam.activeEffects = currentTeam.activeEffects.filter(
          (e) => e.type !== 'multiplier',
        );
      }
    } else if (doubleEffect && appliedMultiplier < 2) {
      appliedMultiplier = 2;
      multiplierName = 'Double Down (x2)';
      currentTeam.activeEffects = currentTeam.activeEffects.filter((e) => e.type !== 'double');
    }

    // Apply the single highest multiplier
    points *= appliedMultiplier;

    currentTeam.score += points;
    this.teams.set([...teams]);

    // Show notification if multiplier was applied
    if (appliedMultiplier > 1) {
      this.showNotificationMessage(
        `${currentTeam.name} scored ${points} points! 🎉 ${multiplierName} applied!`,
      );
    }
  }

  nextTurn() {
    const teams = this.teams();
    const nextIndex = (this.currentTeamIndex() + 1) % teams.length;

    // Decrease effect durations (except multiplier which is handled in awardPoints)
    teams.forEach((team) => {
      team.activeEffects = team.activeEffects.filter((effect) => {
        if (effect.duration !== undefined && effect.type !== 'multiplier') {
          effect.duration--;
          return effect.duration > 0;
        }
        return true;
      });
    });

    this.currentTeamIndex.set(nextIndex);

    // Check if round is complete
    if (nextIndex === 0) {
      const currentRound = this.currentRound();
      if (currentRound >= this.totalRounds()) {
        this.gameState.set('finished');
        return;
      }
      this.currentRound.set(currentRound + 1);

      // Randomize turn order for the new round
      const shuffledTeams = [...teams].sort(() => Math.random() - 0.5);
      this.teams.set(shuffledTeams);
      this.showNotificationMessage(`🔀 Round ${currentRound + 1} - Turn order randomized!`);
    } else {
      this.teams.set([...teams]);
    }

    this.gameState.set('playing');
  }

  showNotificationMessage(message: string) {
    this.notification.set(message);
    this.showNotification.set(true);
    setTimeout(() => {
      this.showNotification.set(false);
    }, 3000);
  }

  usePowerUp(powerUp: PowerUp) {
    this.selectedPowerUp = powerUp;

    if (powerUp.type === 'offensive' && powerUp.id !== 'point-bomb') {
      this.showTargetModal.set(true);
    } else {
      this.applyPowerUp(powerUp, null);
    }
  }

  applyPowerUp(powerUp: PowerUp, targetTeamId: number | null) {
    const teams = this.teams();
    const currentTeam = teams[this.currentTeamIndex()];
    let notificationMsg = '';

    switch (powerUp.id) {
      case 'time-freeze':
        if (targetTeamId !== null) {
          const target = teams.find((t) => t.id === targetTeamId);
          if (target) {
            target.activeEffects.push({ type: 'time-reduce', icon: '⏰', duration: 1, value: 15 });
            notificationMsg = `${currentTeam.name} used Time Freeze on ${target.name}! ⏰ Next question will have only 15 seconds!`;
          }
        }
        break;

      case 'sabotage':
        if (targetTeamId !== null) {
          const target = teams.find((t) => t.id === targetTeamId);
          if (target) {
            // Store sabotage effect - will be applied when they select their next card
            target.activeEffects.push({
              type: 'sabotage',
              icon: '🔥',
              duration: 1,
              value: 0.5, // 50% time reduction
            });
            notificationMsg = `${currentTeam.name} sabotaged ${target.name}! 🔥 Next question time cut in half!`;
          }
        }
        break;

      case 'point-stealer':
        if (targetTeamId !== null) {
          const target = teams.find((t) => t.id === targetTeamId);
          if (target && !target.activeEffects.some((e) => e.type === 'shield')) {
            const stolen = Math.floor(target.score * 0.5);
            target.score -= stolen;
            currentTeam.score += stolen;
            notificationMsg = `${currentTeam.name} stole ${stolen} points from ${target.name}! 💰`;
          } else if (target?.activeEffects.some((e) => e.type === 'shield')) {
            notificationMsg = `${target.name} is protected by a shield! 🛡️`;
          }
        }
        break;

      case 'point-bomb':
        teams.forEach((team) => {
          if (team.id !== currentTeam.id && !team.activeEffects.some((e) => e.type === 'shield')) {
            team.score = Math.max(0, team.score - 500);
          }
        });
        notificationMsg = `${currentTeam.name} dropped a Point Bomb! 💣 -500 points to all opponents!`;
        break;

      case 'shield':
        currentTeam.activeEffects.push({ type: 'shield', icon: '🛡️', duration: 2 });
        notificationMsg = `${currentTeam.name} activated a Shield! 🛡️ Protected for 2 turns!`;
        break;

      case 'double-down':
        currentTeam.activeEffects.push({ type: 'double', icon: '⭐', duration: 1 });
        notificationMsg = `${currentTeam.name} used Double Down! ⭐ Next correct answer worth 2x points!`;
        break;

      case 'multiplier':
        currentTeam.activeEffects.push({ type: 'multiplier', icon: '🎯', duration: 3 });
        notificationMsg = `${currentTeam.name} activated Multiplier Madness! 🎯 Next 3 correct answers worth 3x points!`;
        break;

      case 'swap':
        const oldQuestion = this.currentQuestion();
        const newQuestion = this.getRandomQuestion();
        this.currentQuestion.set(newQuestion);
        this.stopTimer(); // Stop the old timer
        this.timeRemaining.set(newQuestion.time);
        this.startTimer(); // Start new timer with new time
        this.selectedAnswer.set('');
        this.hiddenOptions.set([]);
        notificationMsg = `${currentTeam.name} swapped the question! 🔄 New question loaded!`;
        break;

      case 'fifty-fifty':
        const question = this.currentQuestion();
        if (question) {
          const correctLetter = question.correct;
          const wrongAnswers = question.options
            .filter((opt) => opt.charAt(0) !== correctLetter)
            .map((opt) => opt.charAt(0));
          const toRemove = wrongAnswers.slice(0, 2);
          console.log('50/50 Debug:', {
            correctLetter,
            allOptions: question.options,
            wrongAnswers,
            toRemove,
            hiddenBefore: this.hiddenOptions(),
          });
          this.hiddenOptions.set(toRemove);
          console.log('hiddenAfter:', this.hiddenOptions());
          notificationMsg = `${currentTeam.name} used 50/50! ✂️ Removed options ${toRemove.join(' and ')}!`;
        }
        break;

      case 'lifeline':
        const correctAnswer = this.currentQuestion()?.correct || '';
        this.selectedAnswer.set(correctAnswer);
        this.lifelineUsed.set(true);
        notificationMsg = `${currentTeam.name} used Lifeline! 💡 Answer ${correctAnswer} revealed! (50% points if correct)`;
        break;
    }

    // Remove used power-up
    currentTeam.powerUps = currentTeam.powerUps.filter((p) => p.id !== powerUp.id);
    this.teams.set([...teams]);
    this.showTargetModal.set(false);
    this.showPowerUpModal.set(false);

    // Show notification
    if (notificationMsg) {
      this.showNotificationMessage(notificationMsg);
    }
  }

  selectTarget(teamId: number) {
    if (this.selectedPowerUp) {
      this.applyPowerUp(this.selectedPowerUp, teamId);
    }
  }

  updateTeamCount() {
    const count = this.numTeams();
    const names = [];
    for (let i = 0; i < count; i++) {
      names.push(this.teamNames()[i] || `Team ${i + 1}`);
    }
    this.teamNames.set(names);
  }

  getCurrentTeam(): Team {
    return this.teams()[this.currentTeamIndex()];
  }

  getWinner(): Team {
    const teams = this.teams();
    return teams.reduce((prev, current) => (prev.score > current.score ? prev : current));
  }

  getSortedTeams(): Team[] {
    return [...this.teams()].sort((a, b) => b.score - a.score);
  }

  restartGame() {
    this.gameState.set('setup');
    this.teams.set([]);
    this.currentTeamIndex.set(0);
    this.currentRound.set(1);
    this.currentQuestion.set(null);
    this.usedQuestionIds.set([]); // Reset used questions
    this.stopTimer();
  }

  getTotalCards(): number[] {
    const total = this.numTeams() * this.totalRounds();
    return Array.from({ length: total }, (_, i) => i);
  }
}
