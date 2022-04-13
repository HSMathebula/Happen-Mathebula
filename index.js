const mobileBtn = document.getElementById('mobileMenu');

const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');

const modal = document.getElementById('myModal');

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

[].forEach.call(btns, (el) => {
  el.onclick = function e() {
    modal.style.display = 'block';
  };
});

span.onclick = function e() {
  modal.style.display = 'none';
};

window.onclick = function e(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};