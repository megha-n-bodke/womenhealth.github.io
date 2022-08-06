const hamburgericon = document.getElementById('hmbgbtn');
const closebtn = document.getElementById('closebtn');
const navbar = document.querySelector('.navbar');
const morebtn = document.getElementById('morebtn');
const lessbtn = document.getElementById('lessbtn');
const partnercontainer = document.querySelector('.partnercontainer');
const footer = document.getElementById('footer');

hamburgericon.addEventListener('click', () => {
  navbar.classList.toggle('show');
  hamburgericon.style.display = 'none';
  closebtn.style.display = 'block';
});

closebtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
  hamburgericon.style.display = 'block';
});
morebtn.addEventListener('click', () => {
  partnercontainer.classList.toggle('show');
  morebtn.style.display = 'none';
  footer.style.display = 'flex';
  lessbtn.style.display = 'flex';
});

lessbtn.addEventListener('click', () => {
  partnercontainer.classList.toggle('show');
  morebtn.style.display = 'block';
  footer.style.display = 'none';
  lessbtn.style.display = 'none';
});

/* dynamic speakers details */

const speakers = [
  {
    name: 'Katty Kay',
    designation: 'Award-winning Journalist & Anchor;',
    description:
      'Award-winning journalist and anchor Katty Kay broadcasts to a global audience from Washington with a fresh perspective',
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
  },
  {
    name: 'Elizabeth Lombardo',
    designation: 'Acclaimed Clinical Psychologist',
    description:
      'Success starts from within. Whether you want to have a healthy body, booming business, or flourishing relationships.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Dr. Romie Mushtaq',
    designation: 'Brain Doctor, Speaker on Stress Management',
    description:
      'Dr. Romie is a board-certified physician, award-winning wellness speaker',
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
  {
    name: 'Judy Smith',
    designation: 'Crisis Management Expert',
    description:
      'As the founder and president of Smith & Company, Smith uniquely combines her communication skills, media savvy.',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
  },
  {
    name: 'Joe Pitt',
    designation: 'National Security Correspondent for FOX News',
    description:
      'currently serves as a national security correspondent for FOX News Channel',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    name: 'Joseph Cruise',
    designation: 'International Expert On Nutrition, Fitness and Stress',
    description:
      'The three most appropriate words that come to mind after your powerful Wellness Panel presentation',
    image: 'https://randomuser.me/api/portraits/men/70.jpg',
  },
];
let speaker = '';
/* div for placing speakers */
const speakerdiv = document.querySelector('.speakerintro');
document.addEventListener('DOMContentLoaded', () => {
  speakers.map((person) => {
    speaker += `
    <div class="speakercard">
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
            </div>
            </div>`;
    return speaker;
  });
  speakerdiv.innerHTML = speaker;
});
