const mobileBtn = document.getElementById('mobileMenu');

const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

nav.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

// form
function validation() {
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const alert = document.getElementById('alert');
  alert.innerHTML = '';

  form.addEventListener('submit', (event) => {
    if (name.length < 1 && name === undefined && email < 1
      && email === undefined && email !== email.toLowerCase()
      && message.length < 5 && message === undefined) {
      event.preventDefault();
      alert.innerHTML = '* Make sure you fill all the input fields. form not sent.';
    } else if (email !== email.toLowerCase()) {
      event.preventDefault();
      alert.innerHTML = '* Make sure your email is in lower case. form not sent.';
    } else if (message.length < 5 || message === undefined) {
      event.preventDefault();
      alert.innerHTML = '* Text area should have at least 5 characters. form not sent.';
    } else if (name.length < 1 || name === undefined) {
      event.preventDefault();
      alert.innerHTML = '* Make sure you fill your name. Form not sent.';
    } else if (message.length > 50) {
      event.preventDefault();
      alert.innerHTML = '* exceeded maximum number of caracters (50). Form not sent';
    } else {
      form.submit();
    }
  });
}

validation();

// local storage
// get inputs and radio/checkbox buttons
const inputs = document.querySelectorAll("input[type='text'], input[type='email'], textarea");

Array.prototype.forEach.call(inputs, (el) => {
  const dataName = el.getAttribute('id');

  const dataStored = localStorage.getItem(dataName);

  if (dataStored) el.value = localStorage.getItem(dataName);

  el.addEventListener('blur', (event) => {
    localStorage.setItem(dataName, event.target.value);
    // console.log(localStorage.getItem(dataName));
  });
});