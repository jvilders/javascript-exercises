const repeatString = function(stringToRepeat, repetitions) {
    if(repetitions < 0){
        return 'ERROR'
    }

    let result = '';
    for(;repetitions > 0; repetitions--){
        result += stringToRepeat
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
