// get the needed section
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

// add a click event listener to about
about.addEventListener('click', function (e) {
  // get id from the dataset using target event property
  const id = e.target.dataset.id;
  //   console.log(id);

  // remove active class from each button and add to the current (clicked btn)
  btns.forEach(function (btn) {
    btn.classList.remove('active');
    // add active to clicked btn
    e.target.classList.add('active');
  });

  //   remove active class from articles
  articles.forEach(function (article) {
    article.classList.remove('active');
  });
  //   adding active class to matching article based on id and assign it to a variable for ease access using getElementById() method and using the id as a parameter
  const element = document.getElementById(id);
  // add active class to element
  element.classList.add('active');
});

// there is an issue with the click event as the target is placed inside a container rather than a resposive element like a button. When the user clicks inside the about section, not necessary on any of the elements contained, it clears the active class from article with an active class therefore leaving the content class with a "display:none" style property.
