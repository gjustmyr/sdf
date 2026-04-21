import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizGameComponent } from './quiz-game/quiz-game.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuizGameComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');
}
