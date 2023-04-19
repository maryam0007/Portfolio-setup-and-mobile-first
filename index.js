const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navItem = document.querySelectorAll('.nav-item');
const modal = document.querySelector('.modal');
const cards = document.querySelector('.card-works');
const wrapper = document.querySelector('.wrapper');
const overFlow = document.querySelector('*');
const submit = document.querySelector('.submit');

const openMenu = () => {
  logo.classList.toggle('active');
  navMenu.classList.remove('desktop');
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
};

const closeMenu = () => {
  navMenu.classList.add('desktop');
  logo.classList.remove('active');
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  openMenu();
});

navItem.forEach((n) => {
  n.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

const projects = [
  {
    title: 'Multi-Post Stories',
    technologies: ['html', 'Css', 'Ruby'],
    imageURL: [
      './assets/images/content/work.desktop.png',
      './assets/images/content/popup-desk.png',
    ],
    content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLiveLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
    seeSourceLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Profesional Art Printing Data More',
    technologies: ['html', 'Css', 'Ruby'],
    imageURL: [
      './assets/images/content/about-4.png',
      './assets/images/content/about-4.png',
    ],
    content:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    seeLiveLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
    seeSourceLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: ['html', 'Css', 'Ruby'],
    imageURL: [
      './assets/images/content/about-2.png',
      './assets/images/content/about-2.png',
    ],
    content:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    seeLiveLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
    seeSourceLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Website Portfolio ',
    technologies: ['javascript', 'html', 'css'],
    imageURL: [
      './assets/images/content/about-3.png',
      './assets/images/content/about-3.png',
    ],
    content:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    seeLiveLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
    seeSourceLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Profesional Art Printing Data More',
    technologies: ['html', 'Css', 'Ruby'],
    imageURL: [
      './assets/images/content/about-4.png',
      './assets/images/content/about-4.png',
    ],
    content:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    seeLiveLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
    seeSourceLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: ['html', 'Css', 'Ruby'],
    imageURL: [
      './assets/images/content/about-2.png',
      './assets/images/content/about-2.png',
    ],
    content:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    seeLiveLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
    seeSourceLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Website Portfolio ',
    technologies: ['javascript', 'html', 'css'],
    imageURL: [
      './assets/images/content/about-3.png',
      './assets/images/content/about-3.png',
    ],
    content:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    seeLiveLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
    seeSourceLink: 'https://github.com/maryam0007/Portfolio-setup-and-mobile-first',
  },
];

const openModal = (i) => {
  const projectTechs = projects[i].technologies.map(
    (tec) => `<li class="tag">${tec}</li>`,
  );

  modal.classList.toggle('hidden');
  wrapper.classList.toggle('blur');
  overFlow.classList.toggle('scroll-off');

  modal.innerHTML = `
  <div class="modal-header">
          <h1 class="primary-title modal-title">${projects[i].title}</h1>
          <img src="assets/images/icons/Icon-Cancel.svg" alt="Cancel" class="cancel"/>
        </div>
        <ul class="tags">${projectTechs.join('')}
        </ul>
        <div class="works-stories">
          <img
            src=${projects[i].imageURL[1]}
            alt="Recent Works GYMFIT Multi-Post Stories image"
            class="avatar modal-image"
          />
          <div class="container space">
            <p class="text-content works-content">
              ${projects[i].description}
            </p>
            <div class="btns">
              <a href=${projects[i].seeLiveLink
}><button type="button" class="btn">
                See Live
                <img
                  class="btn-icon"
                  src="./assets/images/icons/Icon-power.svg"
                /></button></a>
              </button>
             <a href=${projects[i].seeSourceLink
}><button type="button" class="btn">
                See Source
                <img
                  class="btn-icon"
                  src="./assets/images/icons/github-white.svg"
                />
              </button></a>
            </div>
          </div>
        </div>
  `;
};

const showCards = (i) => {
  const projectTechs = projects[i].technologies.map(
    (tec) => `<li class="tag  card-tag">${tec}</li>`,
  );

  cards.innerHTML += `<div class="card">
            <div class="card-content">
              <h2 class="card-title">${projects[i].title}</h2>
              <p class="text-content">${projects[i].content}
              </p>
              <ul class="tags">
                ${projectTechs.join('')}
              </ul>
            </div>
            <button type="button" class="btn mobile see-project">
              See Project
            </button>
          </div>`;
};

document.addEventListener('DOMContentLoaded', () => {
  projects.forEach((ele, i) => {
    if (i > 0) showCards(i);
  });

  const seeProject = document.querySelectorAll('.see-project');

  seeProject.forEach((project, i) => {
    seeProject[i].addEventListener('click', () => {
      openModal(i);
      const cancel = document.querySelector('.cancel');
      cancel.addEventListener('click', () => {
        modal.classList.toggle('hidden');
        wrapper.classList.toggle('blur');
        overFlow.classList.toggle('scroll-off');
      });
    });
  });

  const card = document.querySelectorAll('.card');
  document.querySelector('.avatar').src = projects[0].imageURL.at(0);
  card.forEach((element, i) => {
    element.style.backgroundImage = `url(${projects[i + 1].imageURL[0]})`;
  });
});

// Get references to the form fields and reset button
const fullNameField = document.getElementById('fullName');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const resetButton = document.getElementById('reset');

// Save the form data to local storage when the user types in a field
function changeHandler() {
  localStorage.setItem('fullName', fullNameField.value);
  localStorage.setItem('email', emailField.value);
  localStorage.setItem('message', messageField.value);
}

// Retrieve the saved form data from local storage on page load
window.addEventListener('load', () => {
  fullNameField.value = localStorage.getItem('fullName') || '';
  emailField.value = localStorage.getItem('email') || '';
  messageField.value = localStorage.getItem('message') || '';
});

// Reset the form and clear local storage when the reset button is clicked
resetButton.addEventListener('click', () => {
  localStorage.clear();
  fullNameField.value = '';
  emailField.value = '';
  messageField.value = '';
});

submit.addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Email has to be in lowercase!';
    setTimeout(() => {
      error.innerHTML = '';
    }, 10000);
  }

});
