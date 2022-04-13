// ********** set date
const currentYear = document.querySelector('.date');
currentYear.innerHTML = new Date().getFullYear();

// ************* close link functionality
const toggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', function () {
  // ***** toggle (its not effective for a website that adds or removes sections dynamically *****)
  //   linksContainer.classList.toggle('show-links');
  // container Height
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // links height
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ************ fixed navbar
// getting the nav using id and top-link btn using class
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  // get scrollHeight
  const scrollHeight = window.pageYOffset;
  // get navHeight
  const navHeight = navbar.getBoundingClientRect().height;

  // toggle fixed-nav class to bar
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  // toggle show-link class to topLink
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ******** Smooth Scroll

// get all the scroll-links class
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  // add event listener for the click event
  link.addEventListener('click', function (e) {
    // prevent default of scroll
    e.preventDefault;

    // get id for each link and removing the # using slice(1) or
    const id = e.currentTarget.getAttribute('href');

    // get the section using the id
    // also the querySelector() method can be used instead of getElementById() which required slice()
    const element = document.querySelector(id);

    // assign a position variable the height of the section using the offsetTop
    let position = element.offsetTop;
    // console.log(position);

    // use position to get the top offset of each section based on the assigned id. This is achieved using the window.scrollTo() method with properties of left and top
    window.scrollTo({
      left: 0,
      top: position,
    });

    //close the navbar once any of its links are clicked (on smaller screen) by assigning the linkscontainer a height of 0
    linksContainer.style.height = 0;
  });
});
