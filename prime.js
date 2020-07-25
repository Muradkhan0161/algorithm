function isPrime(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
        console.log('running')
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(15));
console.log(isPrime(9));