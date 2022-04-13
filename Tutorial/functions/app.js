// parameters

function greet(name) {
  console.log('hello there ' + name);
}
// name is the parameter

//greetings to anna
greet('Anna');

// 'Anna' is the argument

// return function

initialWidth = 80;

function calculate(value) {
  const value2 = value * 2.54;
  return value2;
}

const width = calculate(initialWidth);
const height = calculate(100);

const dimensions = [height, width];
console.log(dimensions);

console.log('<<<<<<<<<<< expression function >>>>>>>>>>>');

// expression

initialWidth = 80;

function calculate(value) {
  const value2 = value * 2.54;
  return value2;
}

const firstValue = calculate(initialWidth);
const secondValue = calculate(100);

const values = [firstValue, secondValue];
console.log(values);

// function expression

// the inclusion of the function 'calculate' is option - it can be omitted as well.

const add = function calculate(num1, num2) {
  return num1 + num2;
};

const values2 = [firstValue, secondValue, add(5, 9)];
a;
console.log(values2);
