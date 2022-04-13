// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const submitBtn = document.querySelector('.submit-btn');

const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
// submit on form
form.addEventListener('submit', addItem);

// clear items using clearBtn
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********
// addItem function
function addItem(e) {
  // prevent default submit behavior of form
  e.preventDefault();

  // get value of grocery
  const value = grocery.value;
  // set id for each item placed using the new Date() and set it to string
  const id = new Date().getTime().toString();

  //   set conditions for the function
  //   when value is true and editFlag is false
  if (value && !editFlag) {
    // create a new element repricating <article.grocery-item>
    const element = document.createElement('article');

    // add .grocery-item
    element.classList.add('grocery-item');

    // create a dataset attribute with id
    const attr = document.createAttribute('data-id');

    // assign attr value of id
    attr.value = id;

    // set attribute node to element
    element.setAttributeNode(attr);

    // enter HTML value to element
    element.innerHTML = `<p class= 'title'> ${value} </p>
    <div class = 'btn-container'> 
    <button type = 'button' class = 'edit-btn'> <i class = 'fas fa-edit'></i>
    </button>
    <button type = 'button' class = 'delete-btn'> <i class = 'fas fa-trash'></i>
    </button>
   </div>`;

    //    selecting edit and delete buttons
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    // add eventListener
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    //    append element to list
    list.appendChild(element);

    // display success alert
    displayAlert(`new item added`, 'success');

    // add show container class
    container.classList.add('show-container');

    // add to local storage
    addToLocalStorage(id, value);

    // set back to default
    setBackToDefault();

    // when value and editFlag are true
  } else if (value && editFlag) {
    //   assign value of editElement to value
    editElement.innerHTML = value;

    // notify the change
    displayAlert('value changed', 'success');

    editLocalStorage(id, value);

    // set back to default
    setBackToDefault();

    // when the input value is empty
  } else {
    displayAlert(`please enter an item`, 'danger');
    console.log('no value entered');
  }
}

// displayAlert
function displayAlert(text, action) {
  // add text and css class to the empty <p.alert>
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // setTimeout(CBF (anonymous function), duration(1000)) function to remove the alert
  // it needs a call back function and a duration
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items function
function clearItems() {
  // get all items within the list container using grocery-item class
  const items = document.querySelectorAll('.grocery-item');

  // set condition for when the grocery length is more then 0

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('the list is empty!', 'success');
  localStorage.removeItem('list');
  setBackToDefault();
}

//   set back to default function
function setBackToDefault() {
  //set the value of grocery to empty
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

// delete item function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove('show-container');
    displayAlert('list is empty', 'danger');
  } else {
    displayAlert('item deleted', 'danger');
  }
  setBackToDefault();
  //   remove from local storage
  removeFromLocalStorage(id);
}

// edit item function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // get the previous sibling of the button container
  editElement = e.currentTarget.parentElement.previousElementSibling;

  //   set the value of editElement to grocery.value
  grocery.value = editElement.innerHTML;

  editFlag = true;

  editID = element.dataset.id;

  submitBtn.textContent = 'edit';

  //
}

// ****** LOCAL STORAGE **********
// add to local storage function using id and value as arguments
function addToLocalStorage(id, value) {
  // defining values for grocery such as id:id and value:value with a short hand of id,value
  const grocery = { id, value };

  let items = toLocalStorage();
  // if we console log items, we are going to get empty array because we have not set list to the local storage
  console.log(items);
  //   add grocery to items
  items.push(grocery);

  //   set list
  localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {}
let items = toLocalStorage();

items = items.filter(function (item) {
  if (item.id !== id) {
    return item;
  }

  localStorage.setItem('list', JSON.stringify(items));
});

function editLocalStorage(id, value) {
  let items = toLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      items.value = value;
    }
    return item;
  });

  localStorage.setItem('list', JSON.stringify(items));
}

function toLocalStorage() {
  localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

// ****** SETUP ITEMS **********
