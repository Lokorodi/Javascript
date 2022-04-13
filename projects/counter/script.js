let counter = document.querySelector('.counter');
const addCountBtn = document.querySelector('#addCountBtn');
const lessCountBtn = document.querySelector('#lessCountBtn');

let count = 0;
addCountBtn.addEventListener('click', adding);
lessCountBtn.addEventListener('click', reducing);
counter.style.color = 'white';

function adding() {
  counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], {
    duration: 500,
    fill: 'forwards',
    easing: 'ease-in-out',
  });

  count++;
  counter.innerHTML = count;

  if (counter.innerHTML === '0') {
    counter.style.color = 'white';
  } else if (counter.innerHTML > '0') {
    counter.style.color = 'green';
  }
}

function reducing() {
  counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], {
    duration: 1000,
    fill: 'forwards',
    easing: 'ease-in-out',
  });

  count--;
  counter.innerHTML = count;
  if (counter.innerHTML === '0') {
    counter.style.color = 'white';
  } else if (counter.innerHTML < '0') {
    counter.style.color = 'red';
  }
}
