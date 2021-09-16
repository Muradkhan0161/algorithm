/** @format */

// function fact(num) {
//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result = i * result;
//   }
//   return result;
// }
// console.log(fact(3));

function fact(n) {
  // single line to find factorial
  return n == 1 || n == 0 ? 1 : n * fact(n - 1);
}

console.log(fact(3));
