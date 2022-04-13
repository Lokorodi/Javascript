const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

// set the deadline date
// let futureDate = new Date(2022, 2, 10, 17, 30, 0);

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// get the variables from the deadline date
const year = futureDate.getFullYear();
const day = futureDate.getDate();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();

// get varibles based on their arrays
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway end on ${weekday}, ${day} ${month} ${year}, ${hour}:${mins}GMT`;

// 2. Modifying the deadline-format

// use getTime() to convert futureDate into ms and get today's time in ms

const futureTime = futureDate.getTime();
// console.log(futureTime);

// create a function to get the remaining time
function getRemainingTime() {
  // get difference of futureTime and today
  const today = new Date().getTime();
  // console.log(today);

  let t = futureTime - today;

  // conversion of counter time to ms
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // get ms for each counter value
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMin);
  const secs = Math.floor((t % oneMin) / 1000);

  // assing the variable to an array

  const values = [days, hour, mins, secs];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  // assign each variable to the values of the respective counter
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry the giveaway has expired </h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
