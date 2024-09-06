const reverseString = function(input) {
    let inputReversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        let index = input[i]
        inputReversed += index;
    }
    return inputReversed;
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
