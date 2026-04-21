# Python Midterms Examination
**Total Items: 82 | Total Points: 82**  
**Time Limit: 2 hours**  
**Instructions:** Answer all questions. Write your answers clearly. For coding questions, write syntactically correct Python code.

**Exam Breakdown:**
- Part I: Multiple Choice (35 items, 35 points - 1 pt each)
- Part II: True or False (20 items, 20 points - 1 pt each)
- Part III: Fill in the Blanks (15 items, 15 points - 1 pt each)
- Part IV: Code Output (10 items, 10 points - 1 pt each)
- Part V: Code Writing (2 items, 2 points - 1 pt each)

---

## PART I: MULTIPLE CHOICE (Questions 1-35)
*Choose the best answer for each question. 1 point each.*

1. What is a class in Python?
   - A) A function that returns multiple values
   - B) A blueprint for creating objects
   - C) A type of loop
   - D) A built-in data structure

2. Which keyword is used to create a class in Python?
   - A) def
   - B) function
   - C) class
   - D) object

3. What does `self` represent in a class method?
   - A) The class itself
   - B) The instance of the class
   - C) A global variable
   - D) The parent class

4. Which OOP pillar focuses on bundling data and methods together?
   - A) Inheritance
   - B) Polymorphism
   - C) Encapsulation
   - D) Abstraction

5. How do you create a private attribute in Python?
   - A) _attribute
   - B) __attribute
   - C) private attribute
   - D) #attribute

6. What is the purpose of the `__init__` method?
   - A) To delete an object
   - B) To initialize object attributes
   - C) To compare objects
   - D) To convert object to string

7. Which operator is used for exponentiation in Python?
   - A) ^
   - B) **
   - C) ^^
   - D) pow

8. What does the `//` operator do?
   - A) Regular division
   - B) Floor division
   - C) Modulus
   - D) Exponentiation

9. Which comparison operator checks for inequality?
   - A) <>
   - B) =/=
   - C) !=
   - D) !==

10. What will `10 % 3` return?
    - A) 3
    - B) 1
    - C) 3.33
    - D) 0

11. Which logical operator returns True only if both conditions are True?
    - A) or
    - B) and
    - C) not
    - D) xor

12. What does the `is` operator check?
    - A) Value equality
    - B) Type equality
    - C) Object identity in memory
    - D) String comparison

13. Which keyword is used for inheritance in Python?
    - A) extends
    - B) inherits
    - C) Parentheses after class name
    - D) implements

14. What is polymorphism?
    - A) Having multiple classes
    - B) Same method name with different behaviors
    - C) Using multiple inheritance
    - D) Creating abstract classes

15. Which module is needed to create abstract classes?
    - A) abstract
    - B) abc
    - C) base
    - D) meta

16. What does `super()` do?
    - A) Deletes the parent class
    - B) Calls the parent class constructor/method
    - C) Creates a superclass
    - D) Makes a class abstract

17. What will `5 + 3 * 2` evaluate to?
    - A) 16
    - B) 11
    - C) 13
    - D) 10

18. Which statement checks multiple conditions sequentially?
    - A) if...else
    - B) if...elif...else
    - C) switch...case
    - D) while...else

19. What keyword exits a loop immediately?
    - A) exit
    - B) stop
    - C) break
    - D) end

20. What does `continue` do in a loop?
    - A) Stops the loop
    - B) Skips to the next iteration
    - C) Restarts the loop
    - D) Does nothing

21. Which loop is best for iterating over a list?
    - A) while loop
    - B) for loop
    - C) do-while loop
    - D) repeat loop

22. What is method overriding?
    - A) Creating multiple methods with same name
    - B) Child class providing specific implementation of parent method
    - C) Deleting a parent method
    - D) Calling a method twice

23. Which special method is called when using `len()` function?
    - A) `__length__`
    - B) `__size__`
    - C) `__len__`
    - D) `__count__`

24. What does the `in` operator do?
    - A) Checks if value exists in a sequence
    - B) Checks object type
    - C) Checks object identity
    - D) Imports a module

25. What is duck typing?
    - A) A type of inheritance
    - B) Checking object type before using it
    - C) If it behaves like something, treat it as such
    - D) A way to create objects

26. What does the `@abstractmethod` decorator indicate?
    - A) The method cannot be called
    - B) The method must be implemented by child classes
    - C) The method is private
    - D) The method is deprecated

27. Which operator has the highest precedence?
    - A) +
    - B) *
    - C) **
    - D) //

28. What is the result of `bool([])` in Python?
    - A) True
    - B) False
    - C) None
    - D) Error

29. Which statement about class attributes is correct?
    - A) They are unique to each instance
    - B) They are shared among all instances
    - C) They must be private
    - D) They cannot be modified

30. What does the `not` operator do?
    - A) Inverts a boolean value
    - B) Checks if value is None
    - C) Compares two values
    - D) Deletes a variable

31. Which of these creates an infinite loop?
    - A) `for i in range(10):`
    - B) `while False:`
    - C) `while True:`
    - D) `for i in []:`

32. What is encapsulation primarily used for?
    - A) Creating loops
    - B) Data hiding and bundling
    - C) Multiple inheritance
    - D) Error handling

33. Which method is called when using the `+` operator on custom objects?
    - A) `__plus__`
    - B) `__add__`
    - C) `__sum__`
    - D) `__combine__`

34. What does `range(5)` generate?
    - A) 1, 2, 3, 4, 5
    - B) 0, 1, 2, 3, 4
    - C) 0, 1, 2, 3, 4, 5
    - D) 1, 2, 3, 4

35. Which is true about the `elif` statement?
    - A) It can be used without an `if`
    - B) It must come after an `else`
    - C) It checks another condition if previous `if` was False
    - D) It's the same as `else`

---

## PART II: TRUE or FALSE (Questions 36-55)
*Write TRUE if the statement is correct, FALSE if incorrect. 1 point each.*

36. Python supports multiple inheritance.

37. Private attributes in Python can never be accessed outside the class.

38. The `__str__` method is called when you print an object.

39. Abstract classes can be instantiated directly.

40. The `self` parameter must be explicitly passed when calling instance methods.

41. `x += 5` is equivalent to `x = x + 5`.

42. The `and` operator returns True if at least one condition is True.

43. A `for` loop can iterate over strings.

44. The `pass` statement does nothing and acts as a placeholder.

45. Encapsulation means hiding complex implementation details.

46. The `==` operator checks if two variables point to the same object in memory.

47. A child class must implement all methods from the parent class.

48. The modulus operator `%` returns the remainder of division.

49. You can use `else` with a `while` loop in Python.

50. Method overloading (same method name, different parameters) works the same way in Python as in Java.

51. Class methods can be called without creating an instance if they're marked with `@classmethod`.

52. The `__init__` method is optional in a class definition.

53. You can inherit from multiple parent classes in Python.

54. A `break` statement can be used inside an `if` statement without a loop.

55. Protected attributes use double underscore prefix `__`.

---

## PART III: FILL IN THE BLANKS (Questions 56-70)
*Complete each statement with the correct word or phrase. 1 point each.*

56. The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and __________.

57. To create an instance of a class named `Car`, you write: `my_car = __________()`.

58. The __________ method is called automatically when an object is created.

59. A single underscore prefix `_attribute` indicates a __________ attribute by convention.

60. The `@abstractmethod` decorator is used to define __________ methods.

61. The operator used to check membership in a sequence is __________.

62. The __________ statement is used when you have multiple conditions to check sequentially.

63. A loop that continues while a condition is true is called a __________ loop.

64. The special method __________ is called when comparing objects with the `==` operator.

65. When a child class has a method with the same name as the parent class, it's called method __________.

66. The __________ function is used to access parent class methods in a child class.

67. The special method for making an object callable like a function is __________.

68. The __________ operator returns the remainder of a division operation.

69. A __________ is an instance of a class.

70. The keyword __________ is used to skip the current iteration of a loop.

---

## PART IV: CODE OUTPUT (Questions 71-80)
*Predict the output of the following code snippets. 1 point each.*

71. 
```python
x = 10
y = 3
print(x // y)
```

72.
```python
class Dog:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return f"{self.name} says Woof!"

dog = Dog("Buddy")
print(dog.speak())
```

73.
```python
for i in range(3):
    if i == 1:
        continue
    print(i)
```

74.
```python
x = 5
x *= 2
x += 3
print(x)
```

75.
```python
a = 10
b = 20
if a > 5 and b < 15:
    print("True")
else:
    print("False")
```

76.
```python
class Animal:
    def sound(self):
        return "Some sound"

class Cat(Animal):
    def sound(self):
        return "Meow"

cat = Cat()
print(cat.sound())
```

77.
```python
class Book:
    def __init__(self, title):
        self.title = title
    
    def __str__(self):
        return f"Book: {self.title}"

book = Book("1984")
print(book)
```

78.
```python
result = 2 ** 3 + 10 // 2
print(result)
```

79.
```python
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num == 3:
        break
    print(num)
```

80.
```python
x = 15
if x > 10:
    print("A")
elif x > 20:
    print("B")
else:
    print("C")
```

---

## PART V: CODE WRITING (Questions 81-82)
*Write Python code to solve each problem. 1 point each.*

**81.** Design a complete class structure using abstraction where a base class defines required methods that must be implemented by at least two different derived classes. The classes should demonstrate inheritance, encapsulation (using private attributes), and polymorphism. Include a demonstration of how different objects respond to the same method call.

**82.** Create a comprehensive class that manages data with controlled access (encapsulation). The class must include: private attributes, public methods to interact with the data, special methods (`__init__`, `__str__`, and at least one operator overload like `__add__` or `__eq__`), and proper validation of input data.

---

# END OF EXAMINATION

**Good luck!**

---

## ANSWER KEY

### PART I: MULTIPLE CHOICE (1-35)
1. B
2. C
3. B
4. C
5. B
6. B
7. B
8. B
9. C
10. B
11. B
12. C
13. C
14. B
15. B
16. B
17. B
18. B
19. C
20. B
21. B
22. B
23. C
24. A
25. C
26. B
27. C
28. B
29. B
30. A
31. C
32. B
33. B
34. B
35. C

### PART II: TRUE or FALSE (36-55)
36. TRUE
37. FALSE (can be accessed with name mangling: `_ClassName__attribute`)
38. TRUE
39. FALSE
40. FALSE
41. TRUE
42. FALSE (both must be True)
43. TRUE
44. TRUE
45. FALSE (that's abstraction; encapsulation is bundling data and methods)
46. FALSE (that's `is` operator; `==` checks value equality)
47. FALSE (only abstract methods must be implemented)
48. TRUE
49. TRUE
50. FALSE (Python doesn't have traditional method overloading)
51. TRUE
52. TRUE
53. TRUE
54. FALSE (break must be inside a loop)
55. FALSE (protected uses single underscore `_`)

### PART III: FILL IN THE BLANKS (56-70)
56. Polymorphism
57. Car
58. `__init__`
59. protected
60. abstract
61. in (or: not in)
62. if...elif...else (or: elif)
63. while
64. `__eq__`
65. overriding
66. super() (or: super)
67. `__call__`
68. modulus (or: %)
69. object
70. continue

### PART IV: CODE OUTPUT (71-80)
71. `3`
72. `Buddy says Woof!`
73. `0` and `2` (on separate lines)
74. `13`
75. `False`
76. `Meow`
77. `Book: 1984`
78. `13`
79. `1` and `2` (on separate lines)
80. `A`

### PART V: CODE WRITING (81-82)

**81.** Example answer:
```python
from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, name):
        self.__name = name  # Private attribute (encapsulation)
    
    @abstractmethod
    def make_sound(self):  # Abstract method (abstraction)
        pass
    
    def get_name(self):
        return self.__name

class Dog(Animal):  # Inheritance
    def make_sound(self):  # Polymorphism
        return f"{self.get_name()} says Woof!"

class Cat(Animal):  # Inheritance
    def make_sound(self):  # Polymorphism
        return f"{self.get_name()} says Meow!"

# Demonstration
animals = [Dog("Buddy"), Cat("Whiskers")]
for animal in animals:
    print(animal.make_sound())  # Same method, different behavior
```

**82.** Example answer:
```python
class Student:
    def __init__(self, name, grade):
        if not isinstance(name, str) or not name:
            raise ValueError("Name must be a non-empty string")
        if not 0 <= grade <= 100:
            raise ValueError("Grade must be between 0 and 100")
        
        self.__name = name  # Private attribute
        self.__grade = grade  # Private attribute
    
    def get_name(self):
        return self.__name
    
    def get_grade(self):
        return self.__grade
    
    def set_grade(self, grade):
        if 0 <= grade <= 100:
            self.__grade = grade
        else:
            raise ValueError("Grade must be between 0 and 100")
    
    def __str__(self):  # Special method
        return f"Student: {self.__name}, Grade: {self.__grade}"
    
    def __eq__(self, other):  # Operator overload
        if isinstance(other, Student):
            return self.__grade == other.__grade
        return False
```

---

**Grading Scale:**
- 74-82: Excellent (A) - 90-100%
- 66-73: Very Good (B) - 80-89%
- 57-65: Good (C) - 70-79%
- 49-56: Fair (D) - 60-69%
- Below 49: Needs Improvement (F) - Below 60%
