# JavaScript Interview Questions & Answers for QA Automation Testers

> Interview-focused JavaScript notes for QA Automation, SDET, Cypress, and Playwright preparation.

---

# 1. Difference between `var`, `let`, and `const`?

## var
- Function scoped
- Can be re-declared
- Can be updated
- Hoisted with `undefined`

```javascript
var name = "John";
var name = "Mike";

name = "David";

console.log(name);
```

---

## let
- Block scoped
- Cannot be re-declared in same scope
- Can be updated

```javascript
let age = 25;

age = 30;

console.log(age);
```

---

## const
- Block scoped
- Cannot be re-declared
- Cannot be updated

```javascript
const country = "India";

console.log(country);
```

---

## Interview Tip

Use:
- `const` by default
- `let` when value changes
- Avoid `var`

---

# 2. What are JavaScript Data Types?

## Primitive Data Types

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

```javascript
let name = "QA";
let age = 25;
let isActive = true;
let value;
let data = null;
```

---

## Non-Primitive Data Types

1. Object
2. Array
3. Function

```javascript
let user = {
  name: "John"
};

let numbers = [1, 2, 3];
```

---

# 3. Difference between Primitive and Non-Primitive Data Types?

| Primitive | Non-Primitive |
|---|---|
| Stores actual value | Stores reference |
| Immutable | Mutable |
| Simple data | Complex data |

---

## Primitive Example

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

---

## Non-Primitive Example

```javascript
let obj1 = { name: "John" };
let obj2 = obj1;

obj2.name = "Mike";

console.log(obj1.name); // Mike
```

---

# 4. What is `undefined` in JavaScript?

`undefined` means value is not assigned.

```javascript
let test;

console.log(test);
```

### Output

```javascript
undefined
```

---

# 5. Difference between `null` and `undefined`?

| null | undefined |
|---|---|
| Intentional empty value | Variable not assigned |
| Assigned manually | Automatically assigned |

```javascript
let a = null;
let b;

console.log(a);
console.log(b);
```

---

# 6. What is Type Coercion?

Automatic conversion of one data type to another.

```javascript
console.log("5" + 1);
```

### Output

```javascript
51
```

Because number converts into string.

---

# 7. Difference between `==` and `===`?

## `==`
Checks value only.

```javascript
console.log(5 == "5");
```

### Output

```javascript
true
```

---

## `===`
Checks value and datatype.

```javascript
console.log(5 === "5");
```

### Output

```javascript
false
```

---

# 8. What are Truthy and Falsy Values?

## Falsy Values
- false
- 0
- ""
- null
- undefined
- NaN

Everything else is truthy.

```javascript
if ("QA") {
  console.log("Truthy");
}
```

---

# 9. Explain Arithmetic Operators in JavaScript

| Operator | Meaning |
|---|---|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |

```javascript
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
```

---

# 10. Difference between `&&` and `||`?

## `&&` (AND)
Returns true if all conditions are true.

```javascript
console.log(true && true);
```

---

## `||` (OR)
Returns true if one condition is true.

```javascript
console.log(true || false);
```

---

# 11. What is Ternary Operator?

Short form of if-else.

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

---

# 12. Difference between `if-else` and `switch`?

## if-else
Best for multiple conditions.

```javascript
let marks = 80;

if (marks > 75) {
  console.log("Pass");
}
```

---

## switch
Best for exact matching.

```javascript
let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start Work");
    break;
}
```

---

# 13. What is Short-Circuit Evaluation?

JavaScript stops checking when result is found.

```javascript
console.log(false && true);
console.log(true || false);
```

---

# 14. What is a Function in JavaScript?

Reusable block of code.

```javascript
function greet() {
  console.log("Hello QA");
}

greet();
```

---

# 15. Difference between Function Declaration and Function Expression?

## Function Declaration

```javascript
function add(a, b) {
  return a + b;
}
```

---

## Function Expression

```javascript
const add = function(a, b) {
  return a + b;
};
```

---

# 16. What are Arrow Functions?

Short syntax for functions.

```javascript
const add = (a, b) => {
  return a + b;
};
```

---

## Shorter Version

```javascript
const add = (a, b) => a + b;
```

---

# 17. Difference between Normal Function and Arrow Function?

| Normal Function | Arrow Function |
|---|---|
| Has own `this` | Inherits `this` |
| Traditional syntax | Short syntax |

---

# 18. What is a Callback Function?

Function passed into another function.

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Completed");
}

greet("QA", done);
```

---

# 20. What is a Return Statement?

Returns value from function.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

---

# 21. What are Default Parameters?

Default values for function parameters.

```javascript
function greet(name = "Guest") {
  console.log(name);
}

greet();
```

---

# 22. What is Recursion?

Function calling itself.

```javascript
function countDown(num) {

  if (num === 0) {
    return;
  }

  console.log(num);

  countDown(num - 1);
}

countDown(5);
```

---

# 23. What is Scope in JavaScript?

Scope decides where variables can be accessed.

```javascript
let globalVar = "QA";

function test() {
  let localVar = "Automation";

  console.log(globalVar);
}
```

---

# 24. Difference between Global Scope and Local Scope?

## Global Scope
Accessible everywhere.

## Local Scope
Accessible only inside function/block.

---

# 25. What is Block Scope?

Variables inside `{}` accessible only within block.

```javascript
if (true) {
  let name = "QA";
}
```

---

# 26. What is Hoisting?

JavaScript moves declarations to top.

```javascript
console.log(a);

var a = 10;
```

### Output

```javascript
undefined
```

---

# 27. Which Variables are Hoisted?

- `var` hoisted with `undefined`
- `let` and `const` hoisted but inaccessible before declaration

---

# 28. What is Temporal Dead Zone?

Time between hoisting and initialization of `let/const`.

```javascript
console.log(a);

let a = 10;
```

This gives error.

---

# 29. How Do You Create an Array?

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

---

# 30. Difference between Array and Object?

| Array | Object |
|---|---|
| Ordered collection | Key-value pair |
| Uses index | Uses keys |

---

# 31. What are Array Methods?

Functions used to manipulate arrays.

Examples:
- push()
- pop()
- map()
- filter()
- find()

---

# 32. Difference between `map()` and `forEach()`?

| map() | forEach() |
|---|---|
| Returns new array | Does not return array |
| Used for transformation | Used for iteration |

```javascript
let nums = [1, 2, 3];

let result = nums.map(num => num * 2);

console.log(result);
```

---

# 33. What is `filter()`?

Returns matching elements.

```javascript
let nums = [1, 2, 3, 4];

let even = nums.filter(num => num % 2 === 0);

console.log(even);
```

---

# 34. What is `find()`?

Returns first matching element.

```javascript
let users = [1, 2, 3, 4];

let result = users.find(num => num > 2);

console.log(result);
```

---

# 36. What Does `push()` Do?

Adds element to end.

```javascript
let arr = [1, 2];

arr.push(3);

console.log(arr);
```

---

# 37. Difference between `pop()` and `shift()`?

| pop() | shift() |
|---|---|
| Removes last element | Removes first element |

---

# 39. How Do You Remove Duplicates from an Array?

```javascript
let nums = [1, 1, 2, 3];

let unique = [...new Set(nums)];

console.log(unique);
```

---

# 40. How Do You Sort an Array?

```javascript
let nums = [3, 1, 2];

nums.sort((a, b) => a - b);

console.log(nums);
```

---

# 41. What are Objects in JavaScript?

Objects store data in key-value pairs.

```javascript
let user = {
  name: "QA",
  age: 25
};
```

---

# 42. How Do You Access Object Properties?

```javascript
console.log(user.name);
console.log(user["age"]);
```

---

# 43. Difference between Dot Notation and Bracket Notation?

## Dot Notation

```javascript
user.name
```

---

## Bracket Notation

```javascript
user["name"]
```

Bracket notation useful for dynamic keys.

---

# 45. How Do You Merge Objects?

```javascript
let obj1 = { a: 1 };
let obj2 = { b: 2 };

let result = { ...obj1, ...obj2 };

console.log(result);
```

---

# 46. What is Nested Object?

Object inside another object.

```javascript
let user = {
  name: "QA",
  address: {
    city: "Pune"
  }
};
```

---

# 47. How Do You Loop Through Objects?

```javascript
let user = {
  name: "QA",
  age: 25
};

for (let key in user) {
  console.log(key, user[key]);
}
```

---

# 48. Difference between Object and JSON?

| Object | JSON |
|---|---|
| JavaScript datatype | Text format |
| Keys can be without quotes | Keys must be in quotes |

---

# 49. What is `JSON.stringify()`?

Converts object into JSON string.

```javascript
let user = { name: "QA" };

let json = JSON.stringify(user);

console.log(json);
```

---

# 50. What is `JSON.parse()`?

Converts JSON string into object.

```javascript
let json = '{"name":"QA"}';

let obj = JSON.parse(json);

console.log(obj.name);
```

---