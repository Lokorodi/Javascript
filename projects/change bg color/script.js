const bgBtn = document.querySelector('.bgColor');
const bodyChange = document.querySelector('body');
const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const container = document.querySelector('.container');

bgBtn.addEventListener('click', changeColor);

function changeColor() {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colors.length);
    hexColor += colors[random];
    // console.log(hexColor);
  }
  bodyChange.style.backgroundColor = hexColor;
  const parag = document.createElement('p');
  //   const span = document.createElement('span');
  //   const textNode = document.createElement('The hex color is:');

  //   textNode.appendChild(span);

  //    parag.appendChild(textNode);
  //   const container = document.getElementsByClassName('container');
  //   container.appendChild(parag);

  container.insertBefore(parag[hexColor]).innerHTML = hexColor;
}
