const removeFromArray = function(arr, ...remove) {
    const removeSet = new Set(remove)
    return arr.filter(el => !removeSet.has(el))
};

// Do not edit below this line
module.exports = removeFromArray;
