// setting the value
let value = 0;

// the long route

// // getting items from the HTML
// const count = document.querySelector('.count');
// const decrement = document.getElementById('decrement');
// const reset = document.getElementById('reset');
// const increment = document.getElementById('increment');

// // setting functions to each event listeners for the buttons

// decrement.addEventListener('click', function () {
//   value--;
//   count.textContent = value;
//   if (value < '0') {
//     count.style.color = 'red';
//   } else if (value == '0') {
//     count.style.color = 'black';
//   }
// });

// reset.addEventListener('click', function () {
//   value = 0;
//   count.textContent = value;
//   count.style.color = 'black';
// });

// increment.addEventListener('click', function () {
//   value++;
//   count.textContent = value;
//   if (value > '0') {
//     count.style.color = 'green';
//   } else if (value == '0') {
//     count.style.color = 'black';
//   }
// });

// it can also be set in this method

const count = document.querySelector('.count');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const classes = e.currentTarget.classList;
    // animating count digits
    count.animate([{ opacity: '0.2' }, { opacity: '1.0' }], {
      duration: 350,
      fill: 'forwards',
      easing: 'ease-in-out',
    });

    if (classes.contains('decrement')) {
      value--;
    } else if (classes.contains('increment')) {
      value++;
    } else {
      value = 0;
    }

    if (value > 0) {
      count.style.color = 'green';
    } else if (value < 0) {
      count.style.color = 'red';
    } else {
      count.style.color = 'black';
    }

    count.textContent = value;
  });
});
