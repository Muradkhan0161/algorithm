/** @format */

function isPower(num) {
  if (num <= 1) {
    return false;
  }
  return (num & (num - 1)) === 0;
}
console.log(isPower(2));
console.log(isPower(30));
console.log(isPower(16));
console.log(isPower(1));
console.log(isPower(0));
