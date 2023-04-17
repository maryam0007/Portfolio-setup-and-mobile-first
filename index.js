document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-');
  const button = document.getElementById('mob-barss');
  const closebtn = document.getElementById('closed');
  const menuitems = document.getElementById('mlist');
  const worksectiondsk = document.querySelector('.dynamic-dsk');
  const worksectionmob = document.querySelector('.mob-html');
  const desktopbutton = document.querySelector('.btn-left');

  button.onclick = function showMenu() {
    menu.style.display = 'block';
  };

  closebtn.onclick = function hideMenu() {
    menu.style.display = 'none';
  };

  menuitems.onclick = function hideMenu() {
    menu.style.display = 'none';
  };

  // Create card section for desktop
  const content = [
    {
      id: 0,
      title: 'Data Dashboard Healthcare',
      desc: 'Keeping track of hundreds  of components website',
      technologies: ['html', 'bootstrap', 'Ruby on rails'],
      img: './img/about-4.png',
    },
    {
      id: 1,
      title: 'Website Portfolio',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
      img: './img/about-2.png',
    },
    {
      id: 2,
      title: 'Professional Art Printing Data More',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
      img: './img/about-3.png',
    },
    {
      id: 3,
      title: 'Professional Art Printing Data More',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
      img: './img/about-4.png',
    },
    {
      id: 4,
      title: 'Professional Art Printing Data More',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
      img: './img/about-2.png',
    },
    {
      id: 5,
      title: 'Professional Art Printing Data More',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
      img: './img/about-3.png',
    },

  ];

  const content1 = [
    {
      id: 0,
      title: 'Keeping track of hundreds  of components website',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
      technologies: ['html', 'bootstrap', 'Ruby on Rails'],
      img: './img/popup-desk.png',
    },

  ];

  // Desktop see-project button
  desktopbutton.innerHTML = `
  <button type="button" class="button-primary" id="deskbutton">See Project</button>
`;

  const deskButton = document.getElementById('deskbutton');
  deskButton.addEventListener('click', () => {
    const contentItem = content1[0];

    const popupHtml = `
  <div class="pop-up-cont">
    <div class="pop-up-header-desk">
      <h2>${contentItem.title}</h2>
      <span class="close-desk" id="close-desk-">&times;</span>
    </div>
    <div>
      <ul class="pop-up-tags-desk">
        ${contentItem.technologies.map((tech) => `<li>${tech}</li>`).join('')}
      </ul>
    </div>
    <div class="desk-popup-img">
      <img src="${contentItem.img}" alt="${contentItem.title}">
    </div>
    <div class="popup-description-desk">
      <p>${contentItem.desc}</p>
    </div>
    <div class="popup-buttons-desk">
      <a href="${contentItem.live}" id="see-live-desk" class="see-live">See Live<img src="./img/live-desk.png"></a>
      <a href="${contentItem.source}" id="see-source-desk" class="see-source">See Source<img src="./img/source-desk.png"></a>
    </div>
    </div>
  `;

    const popup = document.createElement('div');
    popup.classList.add('pop-up-desk');
    popup.setAttribute('id', 'popupdesk');
    popup.innerHTML = popupHtml;

    const container = document.querySelector('.deskdiv');
    container.appendChild(popup);

    const closeBtn = popup.querySelector('.close-desk');
    closeBtn.addEventListener('click', () => {
      container.removeChild(popup);
    });
  });

  // create cards for desktop
  function generateContent(content) {
    let html = '';
    content.forEach((item) => {
      html += `
        <div class="desk-cards" style="background-image: url('${item.img}')">
          <div class="card-content">
            <h1 class="card-heading">${item.title}</h1>
            <p class="card-text">${item.desc}</p>
            <ul class="card-languages-list">
              ${item.technologies.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
            <button type="button" class="button-1 see-project" id="deskbutton" data-content-id="${item.id}">
              See Project
            </button>
          </div>
        </div>
      `;
    });
    return html;
  }

  // Add event listener to each "See Project" button
  if (worksectiondsk) {
    worksectiondsk.innerHTML = generateContent(content);

    const seeProjectButtons = document.querySelectorAll('.see-project');
    seeProjectButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const contentId = button.getAttribute('data-content-id');
        const contentItem = content.find((item) => item.id === Number(contentId));

        const popupHtml = `
        <div class="pop-up-cont">
          <div class="pop-up-header-desk">
            <h2>${contentItem.title}</h2>
            <span class="close-desk" id="close-desk-">&times;</span>
          </div>
          <div>
            <ul class="pop-up-tags-desk">
              ${contentItem.technologies.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
          </div>
          <div class="desk-popup-img">
            <img src="${contentItem.img}" alt="${contentItem.title}">
          </div>
          <div class="popup-description-desk">
            <p>${contentItem.desc}</p>
          </div>
          <div class="popup-buttons-desk">
            <a href="${contentItem.live}" id="see-live-desk" class="see-live">See Live<img src="./img/live-desk.png"></a>
            <a href="${contentItem.source}" id="see-source-desk" class="see-source">See Source<img src="./img/source-desk.png"></a>
          </div> 
          </div>
        `;

        const popup = document.createElement('div');
        popup.classList.add('pop-up-desk');
        popup.setAttribute('id', 'popupdesk');
        popup.innerHTML = popupHtml;

        const container = document.querySelector('.deskdiv');
        container.appendChild(popup);

        const closeBtn = popup.querySelector('.close-desk');
        closeBtn.addEventListener('click', () => {
          container.removeChild(popup);
        });
      });
    });
  }

  const cardsData = [
    {
      heading: 'Professional Art Printing Data',
      text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages: ['html', 'bootstrap', 'Ruby'],
      buttonLabel: 'See Project',
    },
    {
      heading: 'Professional Art Printing Data',
      text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages: ['html', 'bootstrap', 'Ruby'],
      buttonLabel: 'See Project',
    },
    {
      heading: 'Professional Art Printing Data',
      text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages: ['html', 'bootstrap', 'Ruby'],
      buttonLabel: 'See Project',
    },
    {
      heading: 'Professional Art Printing Data',
      text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages: ['html', 'bootstrap', 'Ruby'],
      buttonLabel: 'See Project',
    },
    {
      heading: 'Professional Art Printing Data',
      text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages: ['html', 'bootstrap', 'Ruby'],
      buttonLabel: 'See Project',
    },
    {
      heading: 'Professional Art Printing Data',
      text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages: ['html', 'bootstrap', 'Ruby'],
      buttonLabel: 'See Project',
    },
    // Add more card data objects as needed
  ];

  // Function to generate cards dynamically
  function generateCards() {
    const cardContainer = worksectionmob;

    // Loop through the cardsData array and create cards dynamically
    for (let i = 0; i < cardsData.length; i += 1) {
      const cardData = cardsData[i];

      const cardDiv = document.createElement('div');
      cardDiv.className = 'card';

      const headingH1 = document.createElement('h1');
      headingH1.className = 'card-heading';
      headingH1.textContent = cardData.heading;

      const textP = document.createElement('p');
      textP.className = 'card-text';
      textP.textContent = cardData.text;

      const languagesUl = document.createElement('ul');
      languagesUl.className = 'card-languages-list';

      for (let j = 0; j < cardData.languages.length; j += 1) {
        const languageLi = document.createElement('li');
        languageLi.textContent = cardData.languages[j];
        languagesUl.appendChild(languageLi);
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'btn-block button-primary';
      button.id = 'project';
      button.textContent = cardData.buttonLabel;

      cardDiv.appendChild(headingH1);
      cardDiv.appendChild(textP);
      cardDiv.appendChild(languagesUl);
      cardDiv.appendChild(button);

      cardContainer.appendChild(cardDiv);
    }
  }

  // Call the generateCards function to display the cards
  generateCards();

  // Create new array of objects for mobile
  const cardDetails = [
    {
      id: 0,
      title: 'Multi Post Stories',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/popup-mob.png',
    },
    {
      id: 1,
      title: 'Profesional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/popup-mob.png',
    },
    {
      id: 2,
      title: 'Professional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/about4-res.png',
    },
    {
      id: 3,
      title: 'Professional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/about4-res.png',
    },
    {
      id: 4,
      title: 'Professional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/about4-res.png',
    },
    {
      id: 5,
      title: 'Professional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/about4-res.png',
    },
    {
      id: 6,
      title: 'Professional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/about4-res.png',
    },
    {
      id: 7,
      title: 'Professional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/about4-res.png',
    },
  ];

  // Create pop up section for mob
  const workdetailsSection = (content) => `
    <div class="popup-background">
      <div class="popup-wrapper">
    <div class="pop-up-header" id="popupclosemobile">
            <span class="mobileclose">&times;</span>
            <h2>${cardDetails[content].title}</h2>
          </div>
          <div>
            <ul class="pop-up-tags">
              <li>${cardDetails[content].tecnologies.tech1}</li>
              <li>${cardDetails[content].tecnologies.tech2}</li>
              <li>${cardDetails[content].tecnologies.tech3}</li>
            </ul>
          </div>
          <div class="mobile-popup-img">
          <img src="${cardDetails[content].img}" alt="./img/popup-mob.png">
          </div>
          <div class="popup-description">
            <p>${cardDetails[content].desc}</p>
          </div>
          <div class="popup-buttons">
          <a href="${cardDetails[content].live}" id="see-live"><img src="./img/live-mob.png"></a>
          <a href="${cardDetails[content].source}" id="see-source"> <img src="./img/source-mob.png"></a>  
          </div> 
          </div>
          </div>
    `;

  const details = document.querySelectorAll('#project');

  // Create pop up section for mobile
  for (let i = 0; i < details.length; i += 1) {
    details[i].addEventListener('click', () => {
      const div = document.createElement('div');
      div.classList.add('pop-up-mobile'); // Fix: corrected classList.add() method
      div.setAttribute('id', 'popupmobile');
      div.innerHTML = workdetailsSection(i);
      const container = document.querySelector('.popmobdiv');
      container.appendChild(div);
      const closedetails = document.querySelector('.mobileclose');
      closedetails.addEventListener('click', () => {
        container.removeChild(div);
      });
    });
  }

  const popup = document.querySelector('.popup-background');
  const body = document.querySelector('body');

  function togglePopup() {
    popup.classList.toggle('active');
    body.classList.toggle('no-scroll');
  }

  document.querySelectorAll('.popup-trigger').forEach((button) => {
    button.addEventListener('click', togglePopup);
  });

  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      togglePopup();
    }
  });
});