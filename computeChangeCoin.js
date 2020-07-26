
function computeChange(coins, amount) {
    // const transformedCoins = {};
    let remainingAmount = amount;

    // for (const coin of coins) {
    //     transformedCoins[coin] = 0;
    // }

    const calculatedChange = {
        selectedCoins: {},
        numberOfCoins: 0
    }; 

    // console.log(calculatedChange);

    for (const coin of coins) {
        const count = Math.floor(remainingAmount / coin);
        calculatedChange[coin] = count;
        calculatedChange.numberOfCoins += count;
        remainingAmount = remainingAmount - coin * count;
    }
    return calculatedChange;
}

const availableCoins = [100, 50, 20, 5, 2, 1];
const targetAmount = 129;

const change = computeChange(availableCoins, targetAmount);
console.log(change);