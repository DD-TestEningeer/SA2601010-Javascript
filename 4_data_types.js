
// Primitive  - String, Number, Boolean, BigInt, undefined, null, Symbol 


// in Java - String myName = "dd";


// in javascript - No need to define the datatype, it will be automatically  detected based on assigned value

let myName = "DD";
console.log( typeof(myName) );

let myNum = 100;
console.log( typeof(myNum) );

let myDecimal = 99.55;
console.log( typeof(myDecimal) );

let myBoolean = true;
console.log( typeof(myBoolean) );

let myUndefinedVar ; // undefined
console.log( typeof(myUndefinedVar) );

let myNullVar = null ;  
console.log( typeof(myNullVar) ); // object - known bug from javascript side

let myBigInt = 99999999999999n;
console.log( typeof(myBigInt) );

let mySymbolVar = Symbol('test');
console.log( typeof(mySymbolVar) );

// Complex - Object - key-values s