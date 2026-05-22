let myStr = "Welcome to JavaScript";

// charAt()	           Returns the character at the specified index.
console.log(myStr.charAt(0));

// concat()	           Joins two or more strings.

let str1 = "Demo";
let str2 = "User";

console.log(str1.concat(str2));

// replace()	            Replace a string with another string.

let str3 = "QA Tester";

let str4 = str3.replace("QA", "DD");

console.log(str4);

// split()	            Converts the string to an array of strings.

let str5 = "Welcome Back";

let str6 = str5.split(" ");

console.log(str6);

// toLowerCase()	Returns the passed string in lowercase.

console.log(str5.toLowerCase());

// toUpperCase()	Returns the passed string in uppercase.
console.log(str5.toUpperCase());

// trim()	            Removes whitespace from the strings.

let str7 = "     abc      ";

let data = str7.trim();
console.log(data);

// includes()	            Searches for a string and returns a boolean value.

let str8 = "Testing with DD";

console.log(str8.includes("Demo"));
