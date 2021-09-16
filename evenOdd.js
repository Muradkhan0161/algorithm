/** @format */

// function evenOdd(number) {
//     if(number%2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(evenOdd(3));

function evenOdd(n) {
  return n % 2 === 0 ? `True, so it's even` : `False, so it's odd`;
}

console.log(evenOdd(3));
console.log(evenOdd(10));
