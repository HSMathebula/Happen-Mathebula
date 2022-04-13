let slideIndex = 1;

let i;
const slides = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('demo');
if (slideIndex > slides.length) { slideIndex = 1; }
if (slideIndex < 1) { slideIndex = slides.length; }
for (i = 0; i < slides.length; i += 1) {
  slides[i].style.display = 'none';
}
for (i = 0; i < dots.length; i += 1) {
  dots[i].className = dots[i].className.replace(' active', '');
}
slides[slideIndex - 1].style.display = 'block';
dots[slideIndex - 1].className += ' active';