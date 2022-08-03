const hamburgericon = document.getElementById('hmbgbtn');
const navbar = document.querySelector('.navbar');
const morebtn = document.getElementById('morebtn');
const lessbtn = document.getElementById('lessbtn');
const partnercontainer = document.querySelector('.partnercontainer');

hamburgericon.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

morebtn.addEventListener('click', () => {
  partnercontainer.classList.toggle('show');
  morebtn.style.display = 'none';
});

lessbtn.addEventListener('click', () => {
  partnercontainer.classList.toggle('show');
});
