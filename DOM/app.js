const h1 = document.getElementById('title');

h1.style.color = 'red';

const link = document.querySelector('#link');
const linkName = link.getAttribute('href');
console.log(linkName);
