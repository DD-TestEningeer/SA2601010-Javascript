# 1. Add Two Numbers

```javascript
// Step 1: Start program

// Step 2: Declare two numbers
num1 = 10
num2 = 20

// Step 3: Add both numbers
sum = num1 + num2

// Step 4: Print result
Print sum

// Step 5: End program
```

---

# 2. Subtract Two Numbers

```javascript
// Start program

// Declare two numbers
num1 = 20
num2 = 5

// Subtract numbers
result = num1 - num2

// Print result
Print result

// End program
```

---

# 3. Multiply Two Numbers

```javascript
// Start program

// Declare numbers
num1 = 5
num2 = 4

// Multiply numbers
result = num1 * num2

// Print result
Print result

// End program
```

---

# 4. Divide Two Numbers

```javascript
// Start program

// Declare numbers
num1 = 20
num2 = 4

// Divide numbers
result = num1 / num2

// Print result
Print result

// End program
```

---

# 5. Find Remainder Using Modulus

```javascript
// Start program

// Declare numbers
num1 = 10
num2 = 3

// Find remainder
remainder = num1 % num2

// Print remainder
Print remainder

// End program
```

---

# 6. Swap Two Variables

```javascript
// Start program

// Declare variables
a = 10
b = 20

// Store a in temporary variable
temp = a

// Assign b value to a
a = b

// Assign temp value to b
b = temp

// Print swapped values
Print a
Print b

// End program
```

---

# 7. Check Even or Odd

```javascript
// Start program

// Declare number
num = 8

// Check remainder when divided by 2
IF num % 2 == 0
    Print "Even"
ELSE
    Print "Odd"

// End program
```

---

# 8. Check Positive or Negative

```javascript
// Start program

// Declare number
num = -5

// Check number condition
IF num > 0
    Print "Positive"
ELSE
    Print "Negative"

// End program
```

---

# 9. Find Largest of Two Numbers

```javascript
// Start program

// Declare numbers
a = 10
b = 20

// Compare numbers
IF a > b
    Print a
ELSE
    Print b

// End program
```

---

# 10. Find Largest of Three Numbers

```javascript
// Start program

// Declare numbers
a = 10
b = 50
c = 30

// Compare all numbers
IF a > b AND a > c
    Print a
ELSE IF b > c
    Print b
ELSE
    Print c

// End program
```

---

# 11. Check Login Success or Failure

```javascript
// Start program

// Store username and password
username = "admin"
password = "1234"

// Check credentials
IF username == "admin" AND password == "1234"
    Print "Login Successful"
ELSE
    Print "Login Failed"

// End program
```

---

# 12. User Role Using Switch

```javascript
// Start program

// Store role
role = "Admin"

// Check role
SWITCH(role)

CASE "Admin":
    Print "Full Access"
    BREAK

CASE "Tester":
    Print "Testing Access"
    BREAK

DEFAULT:
    Print "No Access"

// End program
```

---

# 13. Grade Calculator

```javascript
// Start program

// Store marks
marks = 85

// Check grade condition
IF marks >= 90
    Print "Grade A"
ELSE IF marks >= 75
    Print "Grade B"
ELSE
    Print "Grade C"

// End program
```

---

# 14. Print Numbers from 1 to 10

```javascript
// Start program

// Loop from 1 to 10
FOR i = 1 TO 10
    Print i

// End program
```

---

# 15. Print Numbers from 1 to 100

```javascript
// Start program

// Loop from 1 to 100
FOR i = 1 TO 100
    Print i

// End program
```

---

# 16. Print Even Numbers from 1 to 50

```javascript
// Start program

// Loop from 1 to 50
FOR i = 1 TO 50

    // Check even condition
    IF i % 2 == 0
        Print i

// End program
```

---

# 17. Print Odd Numbers from 1 to 50

```javascript
// Start program

// Loop from 1 to 50
FOR i = 1 TO 50

    // Check odd condition
    IF i % 2 != 0
        Print i

// End program
```

---

# 18. Multiplication Table

```javascript
// Start program

// Store number
num = 5

// Loop from 1 to 10
FOR i = 1 TO 10

    // Multiply number
    result = num * i

    // Print result
    Print result

// End program
```

---

# 19. Sum of Numbers from 1 to N

```javascript
// Start program

// Store limit
n = 5

// Initialize sum
sum = 0

// Loop from 1 to n
FOR i = 1 TO n

    // Add numbers
    sum = sum + i

// Print total
Print sum

// End program
```

---

# 20. Reverse a Number

```javascript
// Start program

// Store number
num = 1234

// Initialize reverse
reverse = 0

// Repeat until number becomes 0
WHILE num > 0

    // Get last digit
    digit = num % 10

    // Add digit to reverse
    reverse = reverse * 10 + digit

    // Remove last digit
    num = num / 10

// Print reversed number
Print reverse

// End program
```

---

# 21. Reverse a String

```javascript
// Start program

// Store string
str = "hello"

// Reverse string
reverse = Reverse(str)

// Print reversed string
Print reverse

// End program
```

---

# 22. Check Palindrome String

```javascript
// Start program

// Store string
str = "madam"

// Reverse string
reverse = Reverse(str)

// Compare strings
IF str == reverse
    Print "Palindrome"
ELSE
    Print "Not Palindrome"

// End program
```

---

# 23. Count Vowels in String

```javascript
// Start program

// Store string
str = "javascript"

// Initialize count
count = 0

// Loop through string
FOR each character in str

    // Check vowel
    IF character is vowel
        count++

// Print count
Print count

// End program
```

---

# 24. Count Characters in String

```javascript
// Start program

// Store string
str = "hello"

// Find length
count = Length(str)

// Print count
Print count

// End program
```

---

# 25. Convert String to Uppercase

```javascript
// Start program

// Store string
str = "hello"

// Convert to uppercase
result = Uppercase(str)

// Print result
Print result

// End program
```

---

# 26. Convert String to Lowercase

```javascript
// Start program

// Store string
str = "HELLO"

// Convert to lowercase
result = Lowercase(str)

// Print result
Print result

// End program
```

---

# 27. Convert String to Title Case

```javascript
// Start program

// Store string
str = "hello world"

// Convert first letter of each word to capital
result = TitleCase(str)

// Print result
Print result

// End program
```

---

# 28. Find Length of String

```javascript
// Start program

// Store string
str = "JavaScript"

// Find length
length = Length(str)

// Print length
Print length

// End program
```

---

# 29. Remove Spaces from String

```javascript
// Start program

// Store string
str = "hello world"

// Remove spaces
result = RemoveSpaces(str)

// Print result
Print result

// End program
```

---

# 30. Print Array Elements

```javascript
// Start program

// Store array
arr = [10,20,30]

// Loop through array
FOR each element in arr
    Print element

// End program
```

---

# 31. Find Largest Number in Array

```javascript
// Start program

// Store array
arr = [10,50,20]

// Assume first element is largest
largest = arr[0]

// Compare elements
FOR each element in arr

    IF element > largest
        largest = element

// Print largest number
Print largest

// End program
```

---

# 32. Find Smallest Number in Array

```javascript
// Start program

// Store array
arr = [10,5,20]

// Assume first element is smallest
smallest = arr[0]

// Compare elements
FOR each element in arr

    IF element < smallest
        smallest = element

// Print smallest
Print smallest

// End program
```

---

# 33. Find Sum of Array Elements

```javascript
// Start program

// Store array
arr = [1,2,3]

// Initialize sum
sum = 0

// Add array elements
FOR each element in arr
    sum = sum + element

// Print sum
Print sum

// End program
```

---

# 34. Print Even Numbers from Array

```javascript
// Start program

// Store array
arr = [1,2,3,4,5,6]

// Check each element
FOR each element in arr

    IF element % 2 == 0
        Print element

// End program
```

---

# 35. Remove Duplicates from Array

```javascript
// Start program

// Store array
arr = [1,2,2,3,4,4]

// Create empty array
unique = []

// Check each element
FOR each element in arr

    IF element not in unique
        Add element to unique

// Print unique array
Print unique

// End program
```

---

# 36. Reverse an Array

```javascript
// Start program

// Store array
arr = [1,2,3]

// Reverse array
reverse = Reverse(arr)

// Print reversed array
Print reverse

// End program
```

---

# 37. Merge Two Arrays

```javascript
// Start program

// Store arrays
arr1 = [1,2]
arr2 = [3,4]

// Merge arrays
result = arr1 + arr2

// Print merged array
Print result

// End program
```

---

# 38. Check if Array Contains Value

```javascript
// Start program

// Store array
arr = [10,20,30]

// Store search value
value = 20

// Check value exists
IF value exists in arr
    Print "Found"
ELSE
    Print "Not Found"

// End program
```

---

# 39. Sort Array in Ascending Order

```javascript
// Start program

// Store array
arr = [5,2,8,1]

// Sort array
Sort arr in ascending order

// Print sorted array
Print arr

// End program
```

---

# 40. Find Duplicate Elements in Array

```javascript
// Start program

// Store array
arr = [1,2,2,3,4,4]

// Compare elements
FOR each element

    IF element appears more than once
        Print element

// End program
```

---

# 41. Create Student Object

```javascript
// Start program

// Create object
student = {
    name: "John",
    age: 22
}

// Print object
Print student

// End program
```

---

# 42. Access Object Properties

```javascript
// Start program

// Create object
student = {
    name: "John"
}

// Access property
Print student.name

// End program
```

---

# 43. Add New Property to Object

```javascript
// Start program

// Create object
student = {name:"John"}

// Add property
student.city = "Pune"

// Print object
Print student

// End program
```

---

# 44. Delete Object Property

```javascript
// Start program

// Create object
student = {name:"John", age:22}

// Delete property
Delete student.age

// Print object
Print student

// End program
```

---

# 45. Check Key Exists in Object

```javascript
// Start program

// Create object
student = {name:"John"}

// Check key
IF "name" exists in student
    Print "Key Found"

// End program
```

---

# 46. Extract Value from Nested JSON

```javascript
// Start program

// Store JSON
data = {
    user:{
        name:"John"
    }
}

// Access nested value
Print data.user.name

// End program
```

---

# 47. Loop Through JSON Object

```javascript
// Start program

// Create object
student = {
    name:"John",
    age:22
}

// Loop object
FOR each key in student
    Print key and value

// End program
```

---

# 48. Compare Two JSON Values

```javascript
// Start program

// Create objects
obj1 = {name:"John"}
obj2 = {name:"John"}

// Compare values
IF obj1.name == obj2.name
    Print "Equal"

// End program
```

---

# 49. Simple Function Example

```javascript
// Start program

// Create function
FUNCTION greet()

    Print "Hello"

// Call function
greet()

// End program
```

---

# 50. Function with Parameters

```javascript
// Start program

// Create function
FUNCTION add(a,b)

    Print a + b

// Call function
add(10,20)

// End program
```

---

# 51. Function with Return Value

```javascript
// Start program

// Create function
FUNCTION multiply(a,b)

    RETURN a * b

// Store function result
result = multiply(5,4)

// Print result
Print result

// End program
```

---

# 52. Arrow Function Example

```javascript
// Start program

// Create arrow function
add = (a,b) => a + b

// Call function
Print add(10,20)

// End program
```

---

# 53. Callback Function Basics

```javascript
// Start program

// Create callback function
FUNCTION display()

    Print "Completed"

// Create main function
FUNCTION process(callback)

    callback()

// Call main function
process(display)

// End program
```
