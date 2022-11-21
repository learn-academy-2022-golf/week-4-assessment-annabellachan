# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Functional programming rely on arguments of the function to provide an output that will always be the same. If given the same inputs, the user should always get the same output ie in finding the sum of 2 numbers. Object oriented programming can have an object that represents all data ie cups object would have: size, color, type...etc.

Researched answer: Functional programming is a form of programming that likes to avoid mutable data. The output of a function typically is encouraged to stay the same if given the same exact inputs to the function. This method is preferred when values are already predefined. On the other hand. object oriented programming allows the user to use objects to represent values in the program. The attributes in the objects are known to be manipulated through methods that are given to the object. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer: Integers in ruby use only whole numbers i.e. 3 + 3 => 6. However, when using asking the program to use floats, it is required to use a float first in the code i.e. 7.0/ 3 => 2.33333. It will return a float.

Researched answer: The main difference between float and decimals is that floats are able to give a more accurate value. Decimals assumes that the use wants a rounded value so it is rounded to the nearest whole number. However, floats can you give you a more accurate value ie 2.0/216 => 0.0092595259....

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit return is the last line returned in the code. Ruby will return the value if a return is not explicitly called on. The function will be written as follows:
    def greeter name
        "Hello #{name}!
    end

Researched answer: Implicit return is a fucntion that returnes values without using any keywords. It is common to not use the return keyword because every block in ruby will return the value of the last line automatically. 

4. What is a block in Ruby?

Your answer: Blocks are an anonymous function that are used in methods to modify their behavior and are defined by curley brackets or do and end. 

Researched answer: Ruby blocks anonymous functions that can be passed into methods, however blocks do not belong to an object. Blocks contains chunks of code that do not have their own name. Blocks are able to be called from the inside of the mthod that it is passed to. 

1. How do you extract a value in a Ruby hash?

Your answer: Ruby hash is a collection of key value pairs. Each value is assigned to a key. To extract a value, calling on the hash followed by the key name grabs the value associated with the key. {} =>

Researched answer: Each value is assigned to a key using "=>" and calling on the hash with the key name will grab the associated value will extract the value from the hash. When a user tries to access a key that does not exist in the hash, the default value nil will be returned. 


## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance allows classes to inherit behavior from another class. The class that inherits behavior is known as subclass and the class it inherits from is known as the superclass. This provides the concept of reusability. It is useful because it allows the reuse of methods of existing classes without the need to create extra code. 

2. RSpec: Request specification language is used to test behavior of objects in Ruby. It is frequently used to test library for Ruby by creating specs that describes the disired output. 

3. CRUD: Create, read, update, and delete data in a database. These are the necessities to impliment a storage application. An active record that allows an application to read and manipulate stored data. 

4. Test-driven development: Test-driven development's goal is checking the input and output of the code. It provides clarity about what the expectations are and how you reach your objective.

5. HTTP: Hypertext transfer protocol - A protocol for retrieving resources. The foundation of any data exchange from the web and client-server also known as the web broswer. 
