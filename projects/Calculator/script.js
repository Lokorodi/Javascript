const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clearBtn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let number = btns[i].getAttribute('data-num');
    screen.value = screen.value + number;
  });
}

equalBtn.addEventListener('click', function () {
  let evaluation = eval(screen.value);
  screen.value = evaluation;
});

clearBtn.addEventListener('click', function () {
  screen.value = '';
});
