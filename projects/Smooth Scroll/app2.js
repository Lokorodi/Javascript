// 1. adding current year
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// 2. resposive toggle button
// needed elements - links container, button & links
const toggleBtn = document.querySelector('.nav-toggle');
const container = document.querySelector('.links-container');
const links = document.querySelector('.links');

// addEventListener to toggle Button
toggleBtn.addEventListener('click', function () {
  // ******* First Scenario*****
  //   container.classList.toggle('show-links');
  // ******** end First ScenariO*****

  //   *********Second Scenario - we add links height to the container since the height of the container is 0 *****

  //Get thecontainer height and links height
  const containerHeight = container.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(linksHeight);

  //add the linksHeight to the containerHeight using an if() conditional statement/.
  if (containerHeight === 0) {
    container.style.height = `${linksHeight}px`;
  } else {
    container.style.height = 0;
  }
  // ****** end second Scenario
});

// 3. Adding fixed nav and a back-to-the-top button
// needed elements nav(already selected in section 2)|fixed-nav class(css)|top-link class|navheight
const navbar = document.getElementById('nav');
const topBtn = document.querySelector('.top-link');

// adding scroll event listener to window
window.addEventListener('scroll', function () {
  // <<< adding fixed-nav class >>>
  // get the height of the scroll using pageYOffset and
  // navheight using getBoundingClientRect()

  const navHeight = navbar.getBoundingClientRect().height;
  let scrollHeight = window.pageYOffset;

  // adding fixed-nav class to nav using conditional if() statement.
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  //   <<< adding the back-to-the-top button using show-link class >>>
  if (scrollHeight > 500) {
    topBtn.classList.add('show-link');
  } else {
    topBtn.classList.remove('show-link');
  }
});

// 4. Smooth Scroll
// Needed Elements - scroll-links| Link IDs

// getting the scroll links
const scrollLinks = document.querySelectorAll('.scroll-link');

// iterating through each link
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent default scroll throught links
    e.preventDefault();
    // get the id
    const id = e.currentTarget.getAttribute('href');
    // console.log(id);

    // get element with the current id
    const element = document.querySelector(id);
    // console.log(element);

    // calculate the height action sections
    const containerHeight = container.getBoundingClientRect().height;

    // navHeight and navbar are global variables
    const navHeight = navbar.getBoundingClientRect().height;
    // setting fixed-nav as True
    const fixedNav = navbar.classList.contains('fixed-nav');
    // get the position using offsetTop property by removing the navHeight for actual height
    let position = element.offsetTop - navHeight;

    // console.log(position);

    // setting the fixedNav as false
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    // assign position to scrollTo method as a value for top property
    window.scrollTo({
      left: 0,
      top: position,
    });
    console.log(position);
    container.style.height = 0;
  });
});
