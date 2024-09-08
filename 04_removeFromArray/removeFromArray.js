const removeFromArray = function(array, ...toRemove) {
    let eraser = array.filter(item => !toRemove.includes(item));
    return eraser
};

console.log(removeFromArray([1, 2, 3, 4, 5], 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
