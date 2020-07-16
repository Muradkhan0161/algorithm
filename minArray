var start = performance.now();
function getMin(numbers) {
    let currentMin = numbers[0];
    for (const num of numbers) {
        if (num < currentMin) {
             currentMin = num;
        }
    }
    return currentMin;
}

console.log(getMin([2,4,1 ,7]));

var duration = performance.now() - start;
console.log(duration);