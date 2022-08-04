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

/* dynamic speakers details */

const speakers = [
  {
    name: "Megha",
    designation: "software devloper",
    description: "struggling with code ,microverse ,deadline",
    image: "/images/background.jpeg",
  },
  {
    name: "Aiden",
    designation: "software devloper",
    description: "struggling with code ,microverse ,deadline",
    image: "/images/background.jpeg",
  },
  {
    name: "Saeqa",
    designation: "software devloper",
    description: "/images/background.jpeg",
    image: "/images/background.jpeg",
  },
  {
    name: "Aamir",
    designation: "software devloper",
    description: "struggling with code ,microverse ,deadline",
    image: "/images/background.jpeg",
  },
  {
    name: "Ely",
    designation: "software devloper",
    description: "struggling with code ,microverse ,deadline",
    image: "/images/background.jpeg",
  },
  {
    name: "Philipe",
    designation: "software devloper",
    description: "struggling with code ,microverse ,deadline",
    image: "/images/background.jpeg",
  },
];
let speaker = "";
/* div for placing speakers */
const speakerdiv = document.querySelector(".speakerintro");
document.addEventListener("DOMContentLoaded", () => {
  speakers.map((person) => {
    speaker += `
      <div class="speakerimage">
               <img src="${person.image}" alt="speaker1">
           </div>
            <div class="speakerdetails">
                <div class="name">
                    <h2>${person.name}</h2>
                </div>
                <div class="profession">${person.designation}
                </div>
                <div class="shortintro">${person.description}
                </div>
            </div>`;
    /* return speaker; */
  });
  speakerdiv.innerHTML = speaker;
});
