document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-');
  const button = document.getElementById('mob-barss');
  const closebtn = document.getElementById('closed');
  const menuitems = document.getElementById('mlist');
  const worksectiondsk = document.querySelector('.dynamic-dsk');
  const worksectionmob = document.querySelector('.mob-html');

  button.onclick = function showMenu() {
    menu.style.display = 'block';
  };

  closebtn.onclick = function hideMenu() {
    menu.style.display = 'none';
  };

  menuitems.onclick = function hideMenu() {
    menu.style.display = 'none';
  };

  worksectiondsk.innerHTML = `
  <div class="card-grid">
  <div class="card">
    <button type="button" class="button-primary-desk" id="deskbutton">
      See Project
    </button>
  </div>
  <div class="card-1">
    <h1 class="card-heading">Data Dashboard <br> Healthcare</h1>
    <p class="card-text">
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard
    </p>
    <ul class="card-languages-list">
      <li>html</li>
      <li>bootstrap</li>
      <li>Ruby</li>
    </ul>
  </div>
  <div class="card-2">
    <h1 class="card-heading">Website Portfolio </h1>
    <p class="card-text">
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard
    </p>
    <ul class="card-languages-list">
      <li>html</li>
      <li>bootstrap</li>
      <li>Ruby</li>
    </ul>
  
  </div>
  <div class="card-3">
    <h1 class="card-heading">Profesional Art Printing Data More </h1>
    <p class="card-text">
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard
    </p>
    <ul class="card-languages-list">
      <li>html</li>
      <li>bootstrap</li>
      <li>Ruby</li>
    </ul>
    
  </div>
  <div class="card-4">
    <h1 class="card-heading">Data Dashboard <br> Healthcare</h1>
    <p class="card-text">
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard
    </p>
    <ul class="card-languages-list">
      <li>html</li>
      <li>bootstrap</li>
      <li>Ruby</li>
    </ul>
   
  </div>
  <div class="card-5">
    <h1 class="card-heading">Website Portfolio </h1>
    <p class="card-text">
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard
    </p>
    <ul class="card-languages-list">
      <li>html</li>
      <li>bootstrap</li>
      <li>Ruby</li>
    </ul>
    
  </div>
</div>
      `;
  worksectionmob.innerHTML = `
      <div class="btn-left-mob">
              <button type="button" class="button-primary" id="project">See Project</button>
            </div> 
      <div class="card-grid-mob">
          <div class="card">
            <h1 class="card-heading">Professional Art Printing Data</h1>
            <p class="card-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="card-languages-list">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
            <button type="button" class="btn-block button-primary" id="project">
              See Project
            </button>
          </div>
          <div class="card">
            <h1 class="card-heading">Professional Art Printing Data</h1>
            <p class="card-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="card-languages-list">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
            <button type="button" class="btn-block button-primary" id="project">
              See Project
            </button>
          </div>
          <div class="card">
            <h1 class="card-heading">Professional Art Printing Data</h1>
            <p class="card-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="card-languages-list">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
            <button type="button" class="btn-block button-primary" id="project">
              See Project
            </button>
          </div>
          <div class="card">
            <h1 class="card-heading">Professional Art Printing Data</h1>
            <p class="card-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="card-languages-list">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
            <button type="button" class="btn-block button-primary" id="project">
              See Project
            </button>
          </div>
          <div class="card">
            <h1 class="card-heading">Professional Art Printing Data</h1>
            <p class="card-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="card-languages-list">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
            <button type="button" class="btn-block button-primary" id="project">
              See Project
            </button>
          </div>
          <div class="card">
            <h1 class="card-heading">Professional Art Printing Data</h1>
            <p class="card-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="card-languages-list">
              <li>html</li>
              <li>bootstrap</li>
              <li>Ruby</li>
            </ul>
            <button type="button" class="btn-block button-primary" id="project">
              See Project
            </button>
          </div>
        </div>
        `;
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
`;

  const details = document.querySelectorAll('#project');
  // Create pop up section for mobile
  for (let i = 0; i < details.length; i += 1) {
    details[i].addEventListener('click', () => {
      const div = document.createElement('div');
      div.classList.add = 'pop-up-mobile';
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

  // Create card section for desktop
  const deskcardDetails = [
    {
      id: 0,
      title: 'Keeping track of hundreds  of components website',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo blanditiis laudantium beatae animi consequuntur, maiores atque obcaecati eveniet ex itaque! Molestias vitae harum distinctio quas, tempora, earum expedita aspernatur laudantium a sunt odit? Voluptatum iusto blanditiis earum libero repellendus amet architecto ad deserunt repellat sequi culpa nihil eum voluptate.',
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/popup-desk.png',
    },
    {
      id: 1,
      title: 'Data Dashboard Healthcare',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './img/about-1.png',
    },
    {
      id: 2,
      title: 'Website Portfolio',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './Images/desktop-popup.png',
    },
    {
      id: 3,
      title: 'Profesional Art Printing Data',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './Images/desktop-popup.png',
    },
    {
      id: 4,
      title: 'Data Dashboard Healthcare',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './Images/desktop-popup.png',
    },
    {
      id: 5,
      title: 'Website Portfolio',
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      tecnologies: {
        tech1: 'html',
        tech2: 'bootstrap',
        tech3: 'Ruby',
      },
      live: 'https://maryam0007.github.io/',
      source: 'https://maryam0007.github.io/',
      img: './Images/desktop-popup.png',
    },

  ];
  // Create generic card section for desktop
  const deskworkdetailsSection = (content) => `
<div class="pop-up-header-desk">
        <h2>${deskcardDetails[content].title}</h2>
        <span class="close-desk" id="close-desk-">&times;</span>
      </div>
      <div>
        <ul class="pop-up-tags-desk">
          <li>${deskcardDetails[content].tecnologies.tech1}</li>
          <li>${deskcardDetails[content].tecnologies.tech2}</li>
          <li>${deskcardDetails[content].tecnologies.tech3}</li>
        </ul>
      </div>
      <div class="desk-popup-img">
      <img src="${deskcardDetails[content].img}" alt="./img/popup-desk.png">
      </div>
      <div class="popup-description-desk">
        <p>${deskcardDetails[content].desc}</p>
      </div>
      <div class="popup-buttons-desk">
      <a href="${deskcardDetails[content].live}" id="see-live-desk" class="see-live">See Live<img src="./img/live-desk.png"></a>
      <a href="${deskcardDetails[content].source}" id="see-source-desk" class="see-source"> See Source <img src="./img/source-desk.png"></a>
      </div>
`;

  const detail = document.querySelectorAll('#deskbutton');
  // Create pop up section for desktop
  for (let i = 0; i < details.length; i += 1) {
    detail[i].addEventListener('click', () => {
      const div2 = document.createElement('div');
      div2.classList.add = 'pop-up-desk';
      div2.setAttribute('id', 'popupdesk');
      div2.innerHTML = deskworkdetailsSection(i);
      const container = document.querySelector('.deskdiv');
      container.appendChild(div2);
      const deskclose = document.querySelector('.close-desk');
      deskclose.addEventListener('click', () => {
        container.removeChild(div2);
      });
    });
  }
});