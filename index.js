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
    if(message.length < 5 || message === undefined) {
        event.preventDefault();
        alert.innerHTML = '* Text area should have at least 5 characters. form not sent.';
    } if(name.length < 1 || name === undefined) {
        event.preventDefault();
        alert.innerHTML = '* Make sure you fill your name. Form not sent.';
    } if(email !== email.toLowerCase()) {
        event.preventDefault();
        alert.innerHTML = '* Make sure your email is in lower case. form not sent.';
    } if(message.length > 50) {
        event.preventDefault();
        alert.innerHTML = '* exceeded maximum number of caracters (50). Form not sent';
    } if(name.length < 1 && name === undefined && email < 1
      && email === undefined && email !== email.toLowerCase()
      && message.length < 5 && message === undefined) {
        event.preventDefault();
        alert.innerHTML = '* Make sure you fill all the input fields. form not sent.';
    } else {
        form.submit();
    }
  });
}

validation();

//local storage
// get inputs and radio/checkbox buttons
let inputs = document.querySelectorAll("input[type='text'], input[type='email'], textarea")

// get and set localStorage for text/number/tel inputs
Array.prototype.forEach.call(inputs, function (el, index, array) {
	// get element Id to use as localStorage property name
	let dataName = el.getAttribute("id"),
	// set dataStored var
		dataStored = localStorage.getItem(dataName);
	// if dataStored set input value to data
	if(dataStored)
		el.value = localStorage.getItem(dataName)
	
	// on blur save data input
	el.addEventListener('blur', function (event) {
		localStorage.setItem(dataName, event.target.value);
		console.log(localStorage.getItem(dataName))
	});
});


// for simple debugging
console.log(localStorage)
function logStorage(){
	console.log(localStorage)
}
function clearStorage(){
	localStorage.clear()
	logStorage()
}