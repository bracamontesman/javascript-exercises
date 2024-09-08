const sumAll = function(num1, num2) {
    let finalSum = 0;
    const index = [num1, num2];
    const minIndex = Math.min(...index);
    const maxIndex = Math.max(...index);
    for (let init = minIndex; init <= maxIndex; init++) {
        finalSum += init;
    }
    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        return finalSum   
    } else {
        return "ERROR";
    }
};

console.log(sumAll(1, 5));

// Do not edit below this line
module.exports = sumAll;
