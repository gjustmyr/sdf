#Abstraction Class
from  abc import ABC, abstractmethod 

class BankAccount (ABC);
def_init_(self,name, balance, deposit, withdraw);
    super()._init_()
    self._balance = balance
    self._deposit = deposit
    self._withdraw = withdraw
 
def account_type(self):
    pass
def deposit(self,amount, balance):
self.balance += amount 
print ("Deposited:", amount)
print ("New Balance:", balance)

def withdraw(self,amount, balance):
if amount > self.balance:
print("Insufficient Balance!")

else:
self.balance -= amount
print("withdrawn:",amount)
print("Remaining Balance:",self.balance)


#Inheritance
#Child Class
def display (self):
    print ("Amount Holder:", self.name)
    print ("Balance:", self.balance)

