

# Assignment 1: Factorial Calculator

```javascript id="x5nq2p"
// Start program

// Create function to calculate factorial
FUNCTION factorial(num)

    // Store factorial value
    fact = 1

    // Loop from 1 to given number
    FOR i = 1 TO num

        // Multiply factorial value
        fact = fact * i

    // Return factorial result
    RETURN fact

// Call function
Print factorial(5)

// End program
```

### Explanation

* Factorial of 5 = 5 × 4 × 3 × 2 × 1
* Output: `120`

---

# Assignment 2: Array Sum

```javascript id="n8ql1m"
// Start program

// Create function to calculate array sum
FUNCTION arraySum(arr)

    // Store total sum
    sum = 0

    // Loop through array
    FOR each element in arr

        // Add element to sum
        sum = sum + element

    // Return total sum
    RETURN sum

// Call function
Print arraySum([10,20,30,40])

// End program
```

### Explanation

* Adds all numbers in the array.
* Output: `100`

---

# Assignment 3: Find the Largest Number

```javascript id="z7y1hc"
// Start program

// Create function to find largest number
FUNCTION findLargest(arr)

    // Assume first element is largest
    largest = arr[0]

    // Compare array elements
    FOR each element in arr

        IF element > largest

            // Update largest value
            largest = element

    // Return largest number
    RETURN largest

// Call function
Print findLargest([5,12,8,25,3])

// End program
```

### Explanation

* Compares each element with the current largest value.
* Output: `25`

---

# Assignment 4: Count Vowels in a String

```javascript id="p3tx9w"
// Start program

// Create function to count vowels
FUNCTION countVowels(str)

    // Store vowel count
    count = 0

    // Store vowels
    vowels = "aeiouAEIOU"

    // Loop through string
    FOR each character in str

        // Check character is vowel
        IF character exists in vowels

            // Increase count
            count++

    // Return total vowels
    RETURN count

// Call function
Print countVowels("JavaScript")

// End program
```

### Explanation

* Checks each character in the string.
* Vowels in `"JavaScript"` → `a, a, i`
* Output: `3`

---

# Assignment 5: Count the Number of Words in a String

```javascript id="m1cv8q"
// Start program

// Create function to count words
FUNCTION countWords(str)

    // Remove extra spaces
    trimmedString = Trim(str)

    // Split sentence into words
    words = Split(trimmedString)

    // Return total words
    RETURN Length(words)

// Call function
Print countWords("JavaScript is easy to learn")

// End program
```

### Explanation

* `trim()` removes extra spaces.
* `split(" ")` converts sentence into words array.
* Output: `5`




# Assignment 1: Factorial Calculator

```javascript
function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
}

// Example
console.log(factorial(5)); // 120
```

### Explanation

* Factorial of 5 = 5 × 4 × 3 × 2 × 1
* Output: `120`

---

# Assignment 2: Array Sum

```javascript
function arraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

// Example
console.log(arraySum([10, 20, 30, 40])); // 100
```

### Explanation

* Adds all numbers in the array.
* Output: `100`

---

# Assignment 3: Find the Largest Number

```javascript
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Example
console.log(findLargest([5, 12, 8, 25, 3])); // 25
```

### Explanation

* Compares each element with the current largest value.
* Output: `25`

---

# Assignment 4: Count Vowels in a String

```javascript
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Example
console.log(countVowels("JavaScript")); // 3
```

### Explanation

* Checks each character in the string.
* Vowels in `"JavaScript"` → `a, a, i`
* Output: `3`

---

# Assignment 5: Count the Number of Words in a String

```javascript
function countWords(str) {
    let words = str.trim().split(" ");
    return words.length;
}

// Example
console.log(countWords("JavaScript is easy to learn")); // 5
```

### Explanation

* `trim()` removes extra spaces.
* `split(" ")` converts sentence into words array.
* Output: `5`
