// break

// print number from 1 to 10 and if target is found stop the loop

let target = 7;

for (let index = 1; index <= 10; index++) {
//   if (target == index) {
//     break;
//   }


  if (target == index) {
    continue;
  }

  console.log(index);
}
