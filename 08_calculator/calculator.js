const add = function(n1, n2) {
  return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arr) {
	return arr.reduce(
    (accumulated, currentValue) => accumulated + currentValue,
    0
  );
};

const multiply = function(arr) {
  return arr.reduce(
    (accumulated, currentValue) => accumulated * currentValue,
    1
  );

};

const power = function(n1, n2) {
	return n1 ** n2
};

const factorial = function(n) {
  let result = 1;
  for(; n > 1; n--){
    result *= n
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
