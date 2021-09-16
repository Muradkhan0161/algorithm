/** @format */

// function isPower(num) {
//     if (num <= 1){
//         return false;
//     }
//     let dividedNumber = num;
//     while (dividedNumber !== 1) {
//         if(dividedNumber % 2 !== 0 ){
//             return false
//         }
//         dividedNumber = dividedNumber/2;
//     }
//     return true;
// }
// console.log(isPower(2));
// console.log(isPower(30));
// console.log(isPower(16));
// console.log(isPower(1));
// console.log(isPower(0));

function isPower(n) {
  if (n <= 1) {
    return false;
  }
  while (n !== 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPower(8));
console.log(isPower(5));
console.log(isPower(30));
console.log(isPower(1));
console.log(isPower(0));
console.log(isPower(16));
