let gas = [10, 30, 50, 43, 45];
let food = [45, 43, 5];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  if (total <= 100) {
    console.log(`You are doing great you are under $100}`);
    return total;
  }
  console.log(`you are way over $100`);

  console.log;
  return total;
}

let gasTotal = calculateTotal(gas);
let foodTotal = calculateTotal(food);
let randomTotal = calculateTotal([43, 67, 43, 72]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.repeat(2)}`;
}

function evening(name) {
  return `Good evening ${name.toLowerCase()}`;
}

function greet(name, cb) {
  const myName = `Wallace`;
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet(`joanne`, morning);
greet(`maina`, afternoon);
greet(`asali`, evening);
