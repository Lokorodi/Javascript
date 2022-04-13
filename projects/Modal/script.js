const modalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
  overlay.classList.add('show-modal');
});

closeBtn.addEventListener('click', function () {
  overlay.classList.remove('show-modal');
});
