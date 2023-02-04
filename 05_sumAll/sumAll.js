const sumAll = function(n1, n2) {
    for(n of [n1, n2]){
        if(typeof n !== 'number' || n < 0) return 'ERROR';
    };
    if(n1 === n2) return n1;

    const [begin, end] = [n1, n2].sort();
    return ((end + 1) * end) / 2 - (begin * (begin - 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
