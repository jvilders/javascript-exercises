const palindromes = function (possiblePalindrome) {
    if(typeof possiblePalindrome !== 'string') return 'ERROR'

    // remove spaces, punctuation, make lowercase
    const normalizedString = possiblePalindrome.replaceAll(/[!., ]/g, '').toLowerCase()

    for(let p1 = 0, p2 = normalizedString.length - 1; p1 < p2; p1++, p2--){
        if(normalizedString.charAt(p1) != normalizedString.charAt(p2)) return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
