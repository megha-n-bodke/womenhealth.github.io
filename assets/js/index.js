const hamburgericon = document.getElementById("hmbgbtn");
const closebtn = document.getElementById("closebtn");
const navbar = document.querySelector(".navbar");
const morebtn = document.getElementById("morebtn");
const lessbtn = document.getElementById("lessbtn");
const partnercontainer = document.querySelector(".partnercontainer");
const footer = document.getElementById("footer");

hamburgericon.addEventListener("click", () => {
  navbar.classList.toggle("show");
  hamburgericon.style.display = "none";
  closebtn.style.display = "block";
});

closebtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
  hamburgericon.style.display = "block";
});
morebtn.addEventListener("click", () => {
  partnercontainer.classList.toggle("show");
  morebtn.style.display = "none";
  footer.style.display = "flex";
  lessbtn.style.display = "flex";
});

lessbtn.addEventListener("click", () => {
  partnercontainer.classList.toggle("show");
  morebtn.style.display = "block";
  footer.style.display = "none";
  lessbtn.style.display = "none";
});
