# Midterm Examination - ANSWER KEY

**CpET142 – Computer Programming II**  
**Second Semester, A.Y. 2025 – 2026**

---

## PART I: MULTIPLE CHOICE (Questions 1-20)

| Question | Answer | Question | Answer |
| -------- | ------ | -------- | ------ |
| 1        | B      | 11       | C      |
| 2        | C      | 12       | C      |
| 3        | B      | 13       | B      |
| 4        | C      | 14       | B      |
| 5        | B      | 15       | B      |
| 6        | B      | 16       | B      |
| 7        | B      | 17       | B      |
| 8        | C      | 18       | B      |
| 9        | B      | 19       | B      |
| 10       | B      | 20       | B      |

### Detailed Answers:

1. **B** - A blueprint for creating objects
2. **C** - class
3. **B** - The instance of the class
4. **C** - Encapsulation
5. **B** - `__attribute`
6. **B** - To initialize object attributes
7. **B** - Floor division
8. **C** - `!=`
9. **B** - 1
10. **B** - And
11. **C** - Object identity in memory
12. **C** - Parentheses after class name
13. **B** - Same method name with different behaviors
14. **B** - Abc
15. **B** - Calls the parent class constructor/method
16. **B** - 11 (multiplication first: 3×2=6, then 5+6=11)
17. **B** - If-elif-else
18. **B** - for loop
19. **B** - Child class providing specific implementation of parent method
20. **B** - They are shared among all instances

---

## PART II: TRUE or FALSE (Questions 21-35)

| Question | Answer | Question | Answer |
| -------- | ------ | -------- | ------ |
| 21       | TRUE   | 29       | TRUE   |
| 22       | FALSE  | 30       | FALSE  |
| 23       | TRUE   | 31       | FALSE  |
| 24       | FALSE  | 32       | FALSE  |
| 25       | FALSE  | 33       | TRUE   |
| 26       | TRUE   | 34       | TRUE   |
| 27       | FALSE  | 35       | FALSE  |
| 28       | TRUE   |          |        |

### Explanations:

21. **TRUE** - Python supports multiple inheritance
22. **FALSE** - Can be accessed with name mangling: `_ClassName__attribute`
23. **TRUE** - `__str__` is called when printing an object
24. **FALSE** - Abstract classes cannot be instantiated directly
25. **FALSE** - `self` is passed automatically
26. **TRUE** - `x += 5` is shorthand for `x = x + 5`
27. **FALSE** - `and` requires both conditions to be True; `or` needs at least one
28. **TRUE** - Strings are iterable in Python
29. **TRUE** - `pass` is a null operation placeholder
30. **FALSE** - That's abstraction; encapsulation is bundling data and methods
31. **FALSE** - `==` checks value equality; `is` checks object identity
32. **FALSE** - Only abstract methods must be implemented
33. **TRUE** - `%` returns the remainder of division
34. **TRUE** - `while...else` is valid in Python
35. **FALSE** - Python doesn't have traditional method overloading

---

## PART III: FILL IN THE BLANKS (Questions 36-50)

36. **Polymorphism**
37. **Car**
38. **`__init__`**
39. **protected**
40. **abstract**
41. **in** (or: not in)
42. **if-elif-else** (or: elif)
43. **while**
44. **`__eq__`**
45. **overriding**
46. **super()** (or: super)
47. **`__call__`**
48. **modulus** (or: %)
49. **object**
50. **continue**

---

## PART IV: CODE ANALYSIS (Questions 51-60)

### 51. Output: `3`

```python
x = 10
y = 3
print(x // y)  # Floor division: 10 // 3 = 3
```

### 52. Output: `Buddy says Woof!`

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} says Woof!"

dog = Dog("Buddy")
print(dog.speak())  # Returns "Buddy says Woof!"
```

### 53. Output:

```
0
2
```

**Explanation:** Loop iterates through 0, 1, 2. When i=1, continue skips to next iteration.

### 54. Output: `13`

```python
x = 5
x *= 2  # x = 5 * 2 = 10
x += 3  # x = 10 + 3 = 13
print(x)
```

### 55. Output: `False`

```python
a = 10
b = 20
if a > 5 and b < 15:  # True and False = False
    print("True")
else:
    print("False")
```

### 56. Output: `Meow`

```python
class Animal:
    def sound(self):
        return "Some sound"

class Cat(Animal):
    def sound(self):  # Method overriding
        return "Meow"

cat = Cat()
print(cat.sound())  # Calls Cat's sound() method
```

### 57. Output: `Book: 1984`

```python
class Book:
    def __init__(self, title):
        self.title = title

    def __str__(self):  # Called when printing
        return f"Book: {self.title}"

book = Book("1984")
print(book)  # Calls __str__()
```

### 58. Output: `13`

```python
result = 2 ** 3 + 10 // 2  # 8 + 5 = 13
# Order: 2**3=8, 10//2=5, 8+5=13
print(result)
```

### 59. Output:

```
1
2
```

**Explanation:** Loop breaks when num equals 3, so only 1 and 2 are printed.

### 60. Output: `A`

```python
x = 15
if x > 10:  # True, so execute this block
    print("A")
elif x > 20:  # Not checked
    print("B")
else:
    print("C")
```

---

## PART V: CODE WRITING (Question 61-80)

### Banking System Program

```python
from abc import ABC, abstractmethod

# Base class with abstraction
class Account(ABC):
    """Abstract base class for all account types"""

    def __init__(self, account_name, initial_balance=0):
        # Encapsulation: Private attributes
        self.__account_name = account_name
        self.__balance = initial_balance
        self.__transaction_history = []

    # Getter methods (Encapsulation)
    def get_account_name(self):
        return self.__account_name

    def get_balance(self):
        return self.__balance

    # Protected method for updating balance
    def _update_balance(self, amount, transaction_type):
        self.__balance += amount
        self.__transaction_history.append(f"{transaction_type}: ${amount:.2f}")

    # Abstract method (must be implemented by child classes)
    @abstractmethod
    def get_account_type(self):
        pass

    def check_balance(self):
        return f"Account: {self.__account_name}\nBalance: ${self.__balance:.2f}"

    def deposit(self, amount):
        if amount <= 0:
            return "Error: Deposit amount must be positive"
        self._update_balance(amount, "Deposit")
        return f"Deposited ${amount:.2f}. New balance: ${self.__balance:.2f}"

    def withdraw(self, amount):
        if amount <= 0:
            return "Error: Withdrawal amount must be positive"
        if amount > self.__balance:
            return f"Error: Insufficient funds. Available: ${self.__balance:.2f}"
        self._update_balance(-amount, "Withdrawal")
        return f"Withdrew ${amount:.2f}. New balance: ${self.__balance:.2f}"

    def get_transaction_history(self):
        if not self.__transaction_history:
            return "No transactions yet"
        return "\n".join(self.__transaction_history)


# Inheritance: SavingsAccount inherits from Account
class SavingsAccount(Account):
    def __init__(self, account_name, initial_balance=0, interest_rate=0.02):
        super().__init__(account_name, initial_balance)
        self.__interest_rate = interest_rate

    # Polymorphism: Different implementation
    def get_account_type(self):
        return "Savings Account"

    def apply_interest(self):
        interest = self.get_balance() * self.__interest_rate
        self._update_balance(interest, "Interest")
        return f"Interest applied: ${interest:.2f}"


# Inheritance: CheckingAccount inherits from Account
class CheckingAccount(Account):
    def __init__(self, account_name, initial_balance=0, overdraft_limit=100):
        super().__init__(account_name, initial_balance)
        self.__overdraft_limit = overdraft_limit

    # Polymorphism: Different implementation
    def get_account_type(self):
        return "Checking Account"

    # Polymorphism: Override withdraw with different behavior
    def withdraw(self, amount):
        if amount <= 0:
            return "Error: Withdrawal amount must be positive"
        max_withdrawal = self.get_balance() + self.__overdraft_limit
        if amount > max_withdrawal:
            return f"Error: Exceeds overdraft limit. Max: ${max_withdrawal:.2f}"
        self._update_balance(-amount, "Withdrawal")
        return f"Withdrew ${amount:.2f}. New balance: ${self.get_balance():.2f}"


# Main Banking System
class BankingSystem:
    def __init__(self):
        self.accounts = {}

    def create_account(self, account_type, name, initial_balance=0):
        if account_type == "1":
            account = SavingsAccount(name, initial_balance)
        elif account_type == "2":
            account = CheckingAccount(name, initial_balance)
        else:
            return None

        self.accounts[name] = account
        return account

    def get_account(self, name):
        return self.accounts.get(name)


def main():
    """Main program with menu-based interface"""
    bank = BankingSystem()
    current_account = None

    print("=" * 50)
    print("WELCOME TO PYTHON BANK")
    print("=" * 50)

    while True:
        print("\n--- MAIN MENU ---")
        print("1. Create New Account")
        print("2. Select Account")
        print("3. Check Balance")
        print("4. Deposit")
        print("5. Withdraw")
        print("6. View Transaction History")
        print("7. Apply Interest (Savings Only)")
        print("8. Exit")

        choice = input("\nEnter your choice (1-8): ").strip()

        if choice == "1":
            print("\n--- Create New Account ---")
            print("1. Savings Account")
            print("2. Checking Account")
            acc_type = input("Select account type (1-2): ").strip()

            name = input("Enter account name: ").strip()
            if not name:
                print("Error: Account name cannot be empty")
                continue

            try:
                balance = float(input("Enter initial balance (default 0): ") or 0)
                account = bank.create_account(acc_type, name, balance)
                if account:
                    current_account = account
                    print(f"\n✓ {account.get_account_type()} created successfully!")
                    print(account.check_balance())
                else:
                    print("Error: Invalid account type")
            except ValueError:
                print("Error: Invalid amount")

        elif choice == "2":
            name = input("\nEnter account name: ").strip()
            account = bank.get_account(name)
            if account:
                current_account = account
                print(f"\n✓ Account selected: {account.get_account_type()}")
                print(account.check_balance())
            else:
                print("Error: Account not found")

        elif choice == "3":
            if current_account:
                print(f"\n{current_account.check_balance()}")
                print(f"Account Type: {current_account.get_account_type()}")
            else:
                print("Error: No account selected")

        elif choice == "4":
            if current_account:
                try:
                    amount = float(input("\nEnter deposit amount: $"))
                    print(current_account.deposit(amount))
                except ValueError:
                    print("Error: Invalid amount")
            else:
                print("Error: No account selected")

        elif choice == "5":
            if current_account:
                try:
                    amount = float(input("\nEnter withdrawal amount: $"))
                    print(current_account.withdraw(amount))
                except ValueError:
                    print("Error: Invalid amount")
            else:
                print("Error: No account selected")

        elif choice == "6":
            if current_account:
                print("\n--- Transaction History ---")
                print(current_account.get_transaction_history())
            else:
                print("Error: No account selected")

        elif choice == "7":
            if current_account:
                if isinstance(current_account, SavingsAccount):
                    print(current_account.apply_interest())
                else:
                    print("Error: Interest only available for Savings Accounts")
            else:
                print("Error: No account selected")

        elif choice == "8":
            print("\nThank you for using Python Bank!")
            print("=" * 50)
            break

        else:
            print("Error: Invalid choice. Please select 1-8")


# Run the program
if __name__ == "__main__":
    main()
```

### OOP Pillars Applied:

1. **Encapsulation:**
   - Private attributes: `__account_name`, `__balance`, `__transaction_history`
   - Getter methods: `get_account_name()`, `get_balance()`
   - Protected method: `_update_balance()`

2. **Abstraction:**
   - Abstract base class `Account` with `@abstractmethod`
   - Forces child classes to implement `get_account_type()`

3. **Inheritance:**
   - `SavingsAccount` inherits from `Account`
   - `CheckingAccount` inherits from `Account`
   - Both use `super().__init__()` to call parent constructor

4. **Polymorphism:**
   - Same method name `get_account_type()` with different implementations
   - `CheckingAccount.withdraw()` overrides parent with overdraft feature
   - Different behavior for same method call

### Key Features:

- ✓ Prevents withdrawing more than available balance
- ✓ Menu-based user input
- ✓ Multiple account types
- ✓ Transaction history tracking
- ✓ Input validation
- ✓ All OOP pillars demonstrated

---

**Prepared by:**  
Mr. JUSTMYR D. GUTIERREZ  
Lecturer I

**Reviewed by:**  
Assoc. Prof. RODERICK A. CABAEL  
Program Chairperson, CET

**Approved by:**  
Assoc. Prof. PHILIP D. GENETA  
Dean, CET

---

**END OF ANSWER KEY**
