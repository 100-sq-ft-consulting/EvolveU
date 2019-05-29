# define attributes / variables
# number
# string
# boolean
# array
# dictionary / objects

# undefined
# sample if / else
# functions
# parameters
# returns
# arrays
# add to the front
# add to the end
# update values
# loops 
# for
# for/in
# while
# do while
# forEach (with array and function)
# Objects / Dictionaries
# declare object
# lookup key to retrieve value


# for class definition
@dataclass
class User:
    UserName: str
    Password: int
    alive: bool

# for instance definition 
class User(object):
    def __init__(self):
        self.username = str
        self.password = number
# for number types
class Example:
  m=0
  n=0

  def __init__(self,n,m):
    self.n=n
    self.m=m

#for boolean, previously known as nonzero before Python 3.0
class Foo(object):

    def __init__(self, bar) :
        self.bar = bar

    def __bool__(self) :
        return self.bar % 2 == 0

if __name__ == "__main__":
     if (Foo(2)) : print "yess !"

# in Python, arrays are called lists.

# empty array
arr = [] 

# init with values (can contain mixed types)
arr = [1, "eels"]

# get item by index (can be negative to access end of array)
arr = [1, 2, 3, 4, 5, 6]
arr[0]  # 1
arr[-1] # 6

# get length
length = len(arr)

# supports append and insert
arr.append(8)
arr.insert(6, 7)

# numpy The Numerical Python Documentation The Numeric Python extension (NumPy) defines another array type; see http://www.numpy.org/ 
import numpy as np

a = np.ones((3,2))        # a 2D array with 3 rows, 2 columns, filled with ones
b = np.array([1,2,3])     # a 1D array initialised using a list [1,2,3]
c = np.linspace(2,3,100)  # an array with 100 points beteen (and including) 2 and 3

print(a*1.5)  # all elements of a times 1.5
print(a.T+b)  # b added to the transpose of a

# dictionaries are key in python, three ways to create them literally, from list of tuples, from two paralel lists
# what is a tuple first 

d = {"age":25}
# As dictionaries are mutable, you need not know all the entries in advance:

# Empty dict
d = {}
# Fill in the entries one by one
d["age"] = 25
# from list of tuples
d = dict([("age", 25)])


class Person(object):
    def __init__(self, name, profession):
        self.name = name
        self.profession = profession

people = [Person("Nick", "Programmer"), Person("Alice","Engineer")]
professions = dict([ (p.name, p.profession) for p in people ])
>>> print professions
{"Nick": "Programmer", "Alice": "Engineer"}

# Static lists for purpose of illustration
names = ["Nick", "Alice", "Kitty"]
professions = ["Programmer", "Engineer", "Art Therapist"]

print zip(range(5), ["a","b","c","d","e"])
[(0, "a"), (1, "b"), (2, "c"), (3, "d"), (4, "e")]

names_and_professions = zip(names, professions)
print names_and_professions
[("Nick", "Programmer"), ("Alice", "Engineer"), ("Kitty", "Art Therapist")]

for name, profession in names_and_professions:
    professions_dict[name] = profession
python synthax.python

# comparisons
==
>=
!=
#  true or false results on a print or in an ecvaluation

Variable1 == variable2
Username = check

# logicals 
and or nor
wrap in parenthesis each comparison evaluation 
or booleans direclty

# if elif and else control flow
indentation and spcaes are key in python (whitespace)

elif serves for case as in switch case.

# while and for loops
iterabel objects are strings, arrays and dictionaries. Can iterate over characters, over indexes and over keys.

# tuple unpackeing 

for item1, item2 

# controlc to interrupt a infinite looping

# range function start stop and step reminisint of slicing a list.append

#in function 

# 
#max and min, enumerate and .joint functions

# modulus and sum functions
    




