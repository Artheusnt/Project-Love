document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

function generateLetter() {
  const recipient = document.getElementById('recipient').value;
  const message = document.getElementById('message').value;
  const preview = document.getElementById('preview');
  preview.innerHTML = `<h3>To ${recipient}</h3><p>${message}</p>`;
}

function playGiggle() {
  const audio = document.getElementById('giggleSound');
  audio.play();
}