const mobileBtn = document.getElementById('mobileMenu');

const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');

const modal = document.getElementById("myModal");

const btns = document.querySelectorAll('.myBtn');

const span = document.querySelector('.close');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

nav.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

[].forEach.call(btns, function(el) {
  el.onclick = function() {
    modal.style.display = "block";
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}