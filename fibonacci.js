/** @format */

// function fib(n) {
//   const numbers = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     numbers.push(numbers[i - 2] + numbers[i - 1]);
// console.log(numbers);
//   }
//   return numbers[n];
// }

// console.log(fib(4));
// console.log(fib(5));

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

console.log(fib(4));
console.log(fib(1));
console.log(fib(0));
