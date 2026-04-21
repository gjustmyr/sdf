# Python Classes and Object-Oriented Programming (OOP)

## 📚 Table of Contents
1. [Introduction to Classes](#introduction-to-classes)
2. [The 4 Pillars of OOP](#the-4-pillars-of-oop)
   - [Encapsulation](#1-encapsulation)
   - [Abstraction](#2-abstraction)
   - [Inheritance](#3-inheritance)
   - [Polymorphism](#4-polymorphism)
3. [Special Methods (Dunder Methods)](#special-methods)
4. [Practice Exercises](#practice-exercises)

---

## Introduction to Classes

### What is a Class?

A **class** is a blueprint for creating objects. It defines attributes (data) and methods (functions) that the objects created from the class will have.

### What is an Object?

An **object** is an instance of a class. When a class is defined, no memory is allocated until an object of that class is created.

### Creating a Class

```python
class Car:
    # Class attribute (shared by all instances)
    wheels = 4
    
    # Constructor method (initializer)
    def __init__(self, brand, model, year):
        # Instance attributes (unique to each instance)
        self.brand = brand
        self.model = model
        self.year = year
    
    # Instance method
    def display_info(self):
        return f"{self.year} {self.brand} {self.model}"
    
    # Method with parameters
    def age(self, current_year):
        return current_year - self.year
```

### Creating Objects

```python
# Creating objects (instances) of the Car class
car1 = Car("Toyota", "Camry", 2020)
car2 = Car("Honda", "Civic", 2019)

# Accessing attributes
print(car1.brand)  # Output: Toyota
print(car2.model)  # Output: Civic

# Calling methods
print(car1.display_info())  # Output: 2020 Toyota Camry
print(car2.age(2024))       # Output: 5
```

### The `self` Parameter

- `self` represents the instance of the class
- It allows you to access attributes and methods within the class
- It must be the first parameter of any instance method
- You don't pass it explicitly when calling methods

```python
class Person:
    def __init__(self, name):
        self.name = name  # self.name is an instance attribute
    
    def greet(self):
        return f"Hello, I'm {self.name}"  # self accesses the instance attribute

person = Person("Alice")
print(person.greet())  # Output: Hello, I'm Alice
```

---

## The 4 Pillars of OOP

Object-Oriented Programming is built on four fundamental principles:

### 1. Encapsulation

**Encapsulation** is the bundling of data (attributes) and methods that operate on that data within a single unit (class). It also involves restricting direct access to some components.

#### Public, Protected, and Private Members

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner           # Public attribute
        self._account_number = 12345  # Protected attribute (convention)
        self.__balance = balance      # Private attribute (name mangling)
    
    # Public method
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    # Public method to access private attribute
    def get_balance(self):
        return self.__balance
    
    # Private method
    def __validate_transaction(self, amount):
        return amount > 0 and amount <= self.__balance
    
    def withdraw(self, amount):
        if self.__validate_transaction(amount):
            self.__balance -= amount
            return True
        return False
```

**Usage:**

```python
account = BankAccount("John", 1000)

# Accessing public attribute
print(account.owner)  # Output: John

# Accessing protected attribute (possible but not recommended)
print(account._account_number)  # Output: 12345

# Accessing private attribute (raises AttributeError)
# print(account.__balance)  # Error!

# Correct way: use public method
print(account.get_balance())  # Output: 1000

# Using public methods
account.deposit(500)
print(account.get_balance())  # Output: 1500

account.withdraw(200)
print(account.get_balance())  # Output: 1300
```

#### Key Points:
- **Public** members: accessible from anywhere (`attribute`)
- **Protected** members: single underscore prefix, should only be accessed within class and subclasses (`_attribute`)
- **Private** members: double underscore prefix, accessible only within the class (`__attribute`)
- **Data hiding** protects the internal state of objects
- **Getter/setter methods** provide controlled access to private data

---

### 2. Abstraction

**Abstraction** means hiding complex implementation details and showing only the essential features. It focuses on what an object does rather than how it does it.

#### Using Abstract Base Classes

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    """Abstract base class"""
    
    @abstractmethod
    def area(self):
        """Must be implemented by subclasses"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """Must be implemented by subclasses"""
        pass
    
    def description(self):
        """Concrete method (can be used as-is)"""
        return "I am a shape"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius
```

**Usage:**

```python
# Cannot instantiate abstract class
# shape = Shape()  # Error: Can't instantiate abstract class

# Can instantiate concrete classes
rect = Rectangle(5, 3)
print(rect.area())       # Output: 15
print(rect.perimeter())  # Output: 16
print(rect.description()) # Output: I am a shape

circle = Circle(4)
print(circle.area())     # Output: 50.26544
print(circle.perimeter()) # Output: 25.13272
```

#### Real-World Example

```python
from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    """Abstract payment processor"""
    
    @abstractmethod
    def process_payment(self, amount):
        pass
    
    @abstractmethod
    def refund_payment(self, transaction_id):
        pass

class CreditCardProcessor(PaymentProcessor):
    def process_payment(self, amount):
        return f"Processing ${amount} via Credit Card"
    
    def refund_payment(self, transaction_id):
        return f"Refunding transaction {transaction_id} to Credit Card"

class PayPalProcessor(PaymentProcessor):
    def process_payment(self, amount):
        return f"Processing ${amount} via PayPal"
    
    def refund_payment(self, transaction_id):
        return f"Refunding transaction {transaction_id} to PayPal"

# Usage
processors = [CreditCardProcessor(), PayPalProcessor()]

for processor in processors:
    print(processor.process_payment(100))
# Output:
# Processing $100 via Credit Card
# Processing $100 via PayPal
```

#### Key Points:
- **Abstract classes** cannot be instantiated directly
- **Abstract methods** must be implemented by subclasses
- Provides a **common interface** for related classes
- Simplifies complex systems by hiding implementation details

---

### 3. Inheritance

**Inheritance** allows a class (child/derived class) to inherit attributes and methods from another class (parent/base class). It promotes code reuse and establishes relationships between classes.

#### Single Inheritance

```python
class Animal:
    """Parent class"""
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        return "Some generic sound"
    
    def info(self):
        return f"{self.name} is a {self.species}"

class Dog(Animal):
    """Child class inheriting from Animal"""
    def __init__(self, name, breed):
        # Call parent constructor
        super().__init__(name, "Dog")
        self.breed = breed
    
    # Method overriding
    def make_sound(self):
        return "Woof! Woof!"
    
    # New method specific to Dog
    def fetch(self):
        return f"{self.name} is fetching the ball!"

class Cat(Animal):
    """Another child class"""
    def __init__(self, name, color):
        super().__init__(name, "Cat")
        self.color = color
    
    def make_sound(self):
        return "Meow!"
    
    def scratch(self):
        return f"{self.name} is scratching the furniture!"
```

**Usage:**

```python
# Creating objects
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Orange")

# Inherited methods
print(dog.info())        # Output: Buddy is a Dog
print(cat.info())        # Output: Whiskers is a Cat

# Overridden methods
print(dog.make_sound())  # Output: Woof! Woof!
print(cat.make_sound())  # Output: Meow!

# Child-specific methods
print(dog.fetch())       # Output: Buddy is fetching the ball!
print(cat.scratch())     # Output: Whiskers is scratching the furniture!

# Accessing child-specific attributes
print(dog.breed)         # Output: Golden Retriever
print(cat.color)         # Output: Orange
```

#### Multiple Inheritance

```python
class Flyer:
    def fly(self):
        return "I can fly!"

class Swimmer:
    def swim(self):
        return "I can swim!"

class Duck(Animal, Flyer, Swimmer):
    """Inherits from multiple classes"""
    def __init__(self, name):
        Animal.__init__(self, name, "Duck")
    
    def make_sound(self):
        return "Quack!"

# Usage
duck = Duck("Donald")
print(duck.info())       # Output: Donald is a Duck
print(duck.make_sound()) # Output: Quack!
print(duck.fly())        # Output: I can fly!
print(duck.swim())       # Output: I can swim!
```

#### The `super()` Function

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    
    def display(self):
        return f"Employee: {self.name}, Salary: ${self.salary}"

class Manager(Employee):
    def __init__(self, name, salary, department):
        # Call parent constructor
        super().__init__(name, salary)
        self.department = department
    
    def display(self):
        # Call parent method and extend it
        base_info = super().display()
        return f"{base_info}, Department: {self.department}"

# Usage
manager = Manager("Alice", 75000, "IT")
print(manager.display())
# Output: Employee: Alice, Salary: $75000, Department: IT
```

#### Key Points:
- **Code reusability**: Child classes inherit parent functionality
- **Method overriding**: Child can provide specific implementation
- **`super()`**: Access parent class methods and constructor
- **Multiple inheritance**: Class can inherit from multiple parents
- **Establishes "is-a" relationship**: Dog is an Animal

---

### 4. Polymorphism

**Polymorphism** means "many forms." It allows objects of different classes to be treated as objects of a common parent class. The same method name can behave differently based on the object calling it.

#### Method Overriding (Runtime Polymorphism)

```python
class Bird:
    def move(self):
        return "Birds can move"
    
    def fly(self):
        return "Most birds can fly"

class Eagle(Bird):
    def fly(self):
        return "Eagles soar high in the sky"

class Penguin(Bird):
    def fly(self):
        return "Penguins cannot fly, but they can swim"

class Sparrow(Bird):
    def fly(self):
        return "Sparrows fly short distances"

# Polymorphism in action
birds = [Eagle(), Penguin(), Sparrow()]

for bird in birds:
    print(bird.fly())

# Output:
# Eagles soar high in the sky
# Penguins cannot fly, but they can swim
# Sparrows fly short distances
```

#### Duck Typing (Python's Polymorphism)

In Python, polymorphism is achieved through "duck typing": "If it walks like a duck and quacks like a duck, it must be a duck."

```python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Cow:
    def speak(self):
        return "Moo!"

class Robot:
    def speak(self):
        return "Beep boop!"

# Polymorphic function
def animal_sound(animal):
    """Works with any object that has a speak() method"""
    print(animal.speak())

# All work the same way
animals = [Dog(), Cat(), Cow(), Robot()]

for animal in animals:
    animal_sound(animal)

# Output:
# Woof!
# Meow!
# Moo!
# Beep boop!
```

#### Operator Overloading

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # Overload + operator
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    # Overload * operator
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    # Overload str() function
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    # Overload == operator
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

# Usage
v1 = Vector(2, 3)
v2 = Vector(4, 5)

v3 = v1 + v2          # Uses __add__
print(v3)             # Output: Vector(6, 8)

v4 = v1 * 3           # Uses __mul__
print(v4)             # Output: Vector(6, 9)

print(v1 == v2)       # Output: False
print(Vector(1,2) == Vector(1,2))  # Output: True
```

#### Real-World Example: Payment Processing

```python
class Payment:
    def __init__(self, amount):
        self.amount = amount
    
    def process(self):
        return "Processing payment"

class CreditCardPayment(Payment):
    def __init__(self, amount, card_number):
        super().__init__(amount)
        self.card_number = card_number
    
    def process(self):
        return f"Processing ${self.amount} via Credit Card ending in {self.card_number[-4:]}"

class PayPalPayment(Payment):
    def __init__(self, amount, email):
        super().__init__(amount)
        self.email = email
    
    def process(self):
        return f"Processing ${self.amount} via PayPal account {self.email}"

class CryptoPayment(Payment):
    def __init__(self, amount, wallet_address):
        super().__init__(amount)
        self.wallet_address = wallet_address
    
    def process(self):
        return f"Processing ${self.amount} via Crypto wallet {self.wallet_address[:10]}..."

# Polymorphic function
def execute_payment(payment):
    """Works with any Payment object"""
    print(payment.process())

# Different payment types treated uniformly
payments = [
    CreditCardPayment(100, "1234567890123456"),
    PayPalPayment(50, "user@example.com"),
    CryptoPayment(75, "1A2B3C4D5E6F7G8H9I0J")
]

for payment in payments:
    execute_payment(payment)

# Output:
# Processing $100 via Credit Card ending in 3456
# Processing $50 via PayPal account user@example.com
# Processing $75 via Crypto wallet 1A2B3C4D5E...
```

#### Key Points:
- **Same interface, different implementations**
- **Method overriding**: Subclasses can change parent method behavior
- **Duck typing**: Python checks for method existence, not type
- **Operator overloading**: Define how operators work with custom objects
- Makes code more **flexible and extensible**

---

## Special Methods (Dunder Methods)

Special methods in Python start and end with double underscores (`__`). They allow you to define how objects behave with built-in operations.

### Common Special Methods

```python
class Book:
    def __init__(self, title, author, pages):
        """Constructor - called when object is created"""
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        """String representation - called by str() and print()"""
        return f"'{self.title}' by {self.author}"
    
    def __repr__(self):
        """Official representation - called by repr()"""
        return f"Book('{self.title}', '{self.author}', {self.pages})"
    
    def __len__(self):
        """Length - called by len()"""
        return self.pages
    
    def __eq__(self, other):
        """Equality - called by =="""
        return self.title == other.title and self.author == other.author
    
    def __lt__(self, other):
        """Less than - called by <"""
        return self.pages < other.pages
    
    def __add__(self, other):
        """Addition - called by +"""
        return self.pages + other.pages
    
    def __getitem__(self, index):
        """Indexing - called by []"""
        if index == 0:
            return self.title
        elif index == 1:
            return self.author
        else:
            raise IndexError("Index out of range")
    
    def __call__(self):
        """Make object callable"""
        return f"Reading '{self.title}'..."
    
    def __del__(self):
        """Destructor - called when object is deleted"""
        print(f"Book '{self.title}' is being deleted")

# Usage examples
book1 = Book("1984", "George Orwell", 328)
book2 = Book("To Kill a Mockingbird", "Harper Lee", 281)

print(book1)              # Calls __str__(): '1984' by George Orwell
print(repr(book1))        # Calls __repr__(): Book('1984', 'George Orwell', 328)
print(len(book1))         # Calls __len__(): 328
print(book1 == book2)     # Calls __eq__(): False
print(book1 < book2)      # Calls __lt__(): False (328 < 281)
print(book1 + book2)      # Calls __add__(): 609
print(book1[0])           # Calls __getitem__(): 1984
print(book1())            # Calls __call__(): Reading '1984'...
```

### Method Categories

| Category | Methods | Purpose |
|----------|---------|---------|
| **Initialization** | `__init__`, `__new__`, `__del__` | Object creation and destruction |
| **String Representation** | `__str__`, `__repr__` | String conversion |
| **Comparison** | `__eq__`, `__ne__`, `__lt__`, `__le__`, `__gt__`, `__ge__` | Comparison operations |
| **Arithmetic** | `__add__`, `__sub__`, `__mul__`, `__truediv__`, `__mod__`, `__pow__` | Math operations |
| **Container** | `__len__`, `__getitem__`, `__setitem__`, `__delitem__`, `__contains__` | Container behavior |
| **Callable** | `__call__` | Make object callable like function |

---

## Practice Exercises

### Exercise 1: Encapsulation
Create a `Student` class with private attributes for name and grades. Implement methods to add grades and calculate average, ensuring grades are between 0-100.

<details>
<summary>Solution</summary>

```python
class Student:
    def __init__(self, name):
        self.__name = name
        self.__grades = []
    
    def add_grade(self, grade):
        if 0 <= grade <= 100:
            self.__grades.append(grade)
            return True
        return False
    
    def get_average(self):
        if not self.__grades:
            return 0
        return sum(self.__grades) / len(self.__grades)
    
    def get_name(self):
        return self.__name
    
    def display_info(self):
        return f"{self.__name}: Average = {self.get_average():.2f}"

# Test
student = Student("Alice")
student.add_grade(85)
student.add_grade(92)
student.add_grade(78)
print(student.display_info())  # Alice: Average = 85.00
```
</details>

### Exercise 2: Abstraction
Create an abstract `Vehicle` class with abstract methods `start()` and `stop()`. Create `Car` and `Motorcycle` subclasses with specific implementations.

<details>
<summary>Solution</summary>

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    def __init__(self, brand):
        self.brand = brand
    
    @abstractmethod
    def start(self):
        pass
    
    @abstractmethod
    def stop(self):
        pass

class Car(Vehicle):
    def start(self):
        return f"{self.brand} car: Engine started, fastening seatbelt"
    
    def stop(self):
        return f"{self.brand} car: Applying brakes, engine off"

class Motorcycle(Vehicle):
    def start(self):
        return f"{self.brand} motorcycle: Kickstart, ready to ride"
    
    def stop(self):
        return f"{self.brand} motorcycle: Braking, engine off"

# Test
vehicles = [Car("Toyota"), Motorcycle("Harley")]
for vehicle in vehicles:
    print(vehicle.start())
    print(vehicle.stop())
```
</details>

### Exercise 3: Inheritance
Create a `Person` class, then create `Teacher` and `Student` subclasses that inherit from it. Add specific attributes and methods for each.

<details>
<summary>Solution</summary>

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name}, {self.age} years old"

class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject
        self.students = []
    
    def teach(self):
        return f"{self.name} is teaching {self.subject}"
    
    def add_student(self, student):
        self.students.append(student)

class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade
    
    def study(self):
        return f"{self.name} is studying in grade {self.grade}"

# Test
teacher = Teacher("Mr. Smith", 35, "Mathematics")
student1 = Student("Alice", 15, 10)
student2 = Student("Bob", 16, 10)

teacher.add_student(student1)
teacher.add_student(student2)

print(teacher.introduce())
print(teacher.teach())
print(student1.study())
```
</details>

### Exercise 4: Polymorphism
Create different shape classes (`Circle`, `Rectangle`, `Triangle`) with a common `area()` method, then create a function that calculates the total area of a list of shapes.

<details>
<summary>Solution</summary>

```python
import math

class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Triangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

def calculate_total_area(shapes):
    """Polymorphic function - works with any object with area() method"""
    total = 0
    for shape in shapes:
        total += shape.area()
    return total

# Test
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Triangle(3, 8)
]

print(f"Total area: {calculate_total_area(shapes):.2f}")
# Output: Total area: 114.54
```
</details>

### Exercise 5: Complete OOP System
Create a library management system using all 4 OOP pillars.

<details>
<summary>Solution</summary>

```python
from abc import ABC, abstractmethod
from datetime import datetime, timedelta

# Abstraction: Abstract base class
class LibraryItem(ABC):
    def __init__(self, title, item_id):
        self._title = title  # Encapsulation: protected attribute
        self._item_id = item_id
        self._is_checked_out = False
    
    @abstractmethod
    def get_loan_period(self):
        """Abstract method - must be implemented by subclasses"""
        pass
    
    def checkout(self):
        if not self._is_checked_out:
            self._is_checked_out = True
            return True
        return False
    
    def return_item(self):
        self._is_checked_out = False
    
    def __str__(self):  # Special method
        status = "Checked Out" if self._is_checked_out else "Available"
        return f"{self._title} (ID: {self._item_id}) - {status}"

# Inheritance: Book inherits from LibraryItem
class Book(LibraryItem):
    def __init__(self, title, item_id, author):
        super().__init__(title, item_id)
        self.author = author
    
    def get_loan_period(self):  # Polymorphism: specific implementation
        return 14  # 14 days

# Inheritance: DVD inherits from LibraryItem
class DVD(LibraryItem):
    def __init__(self, title, item_id, director):
        super().__init__(title, item_id)
        self.director = director
    
    def get_loan_period(self):  # Polymorphism: different implementation
        return 7  # 7 days

# Inheritance: Magazine inherits from LibraryItem
class Magazine(LibraryItem):
    def __init__(self, title, item_id, issue):
        super().__init__(title, item_id)
        self.issue = issue
    
    def get_loan_period(self):  # Polymorphism: different implementation
        return 3  # 3 days

class Library:
    def __init__(self):
        self.__items = []  # Encapsulation: private attribute
    
    def add_item(self, item):
        self.__items.append(item)
    
    def display_items(self):
        for item in self.__items:
            print(item)  # Polymorphism: __str__ called for each item
    
    def checkout_item(self, item_id):
        for item in self.__items:
            if item._item_id == item_id:
                if item.checkout():
                    due_date = datetime.now() + timedelta(days=item.get_loan_period())
                    return f"Checked out! Due date: {due_date.strftime('%Y-%m-%d')}"
                return "Item already checked out"
        return "Item not found"

# Test the system
library = Library()

# Adding different types of items (Polymorphism)
library.add_item(Book("1984", "B001", "George Orwell"))
library.add_item(DVD("Inception", "D001", "Christopher Nolan"))
library.add_item(Magazine("National Geographic", "M001", "June 2024"))

print("Library Inventory:")
library.display_items()

print("\n" + library.checkout_item("B001"))
print(library.checkout_item("D001"))

print("\nUpdated Inventory:")
library.display_items()
```
</details>

---

## 🎯 Key Takeaways

1. **Encapsulation**: Bundle data and methods, hide internal details
2. **Abstraction**: Hide complexity, show only what's necessary
3. **Inheritance**: Reuse code, create hierarchical relationships
4. **Polymorphism**: Same interface, different behaviors

## 📖 Additional Resources

- [Python Official Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)
- [W3Schools Python Classes](https://www.w3schools.com/python/python_classes.asp)
- [Real Python - Object-Oriented Programming](https://realpython.com/python3-object-oriented-programming/)

---

**Happy Coding! 🐍**
