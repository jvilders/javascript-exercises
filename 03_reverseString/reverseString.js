const reverseString = function(stringToReverse) {
    const charArray = [];

    for(let i = stringToReverse.length - 1; i >= 0; i--){
        charArray.push(stringToReverse.charAt(i));
    };

    return charArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
