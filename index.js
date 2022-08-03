const hamburgericon = document.getElementById("hmbgbtn");
const navbar = document.querySelector(".navbar");
const morebtn = document.getElementById("morebtn");
const lessbtn = document.getElementById("lessbtn");
const partnercontainer = document.querySelector(".partnercontainer");

hamburgericon.addEventListener("click", function () {
  navbar.classList.toggle("show");
});

morebtn.addEventListener("click", function () {
  partnercontainer.classList.toggle("show");
  morebtn.style.display = "none";
});

lessbtn.addEventListener("click", function () {
  partnercontainer.classList.toggle("show");
});
