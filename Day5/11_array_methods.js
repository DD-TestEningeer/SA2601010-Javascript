

let colors = ["red", "white", "blue", "pink"];

// add new element 
colors.push("black");

console.log(colors);

// remove element 

colors.pop();
console.log(colors);

// finding the element
 const flag = colors.find((element) => element==="blue");

 console.log(flag);

 const words = colors.filter((element) => element.length>4 );

 console.log(words);


 const numArray = [11, 22, 33];

 const resultArray = numArray.map( (num)=> num *3  );
 console.log(resultArray);

  console.log( numArray.shift());

