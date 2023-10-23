'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav')

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Button Scrolling
////////////////////////////////////////////////////////////////


btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log('Curent Scroll (X/Y', window.pageXOffset, pageYOffset);
  console.log(
    'height/width viwport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(s1coords.left, s1coords.top);
/*
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });*/

  section1.scrollIntoView({behavior: 'smooth'});
});

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('LINK');
    const id = this.getAttribute('href');
  });
});



// Page Navigation
////////////////////////////////////////////////////////////////
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Component

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard Clause
  if(!clicked) return ;
  //active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active')
  // activate content area

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

});


//Menu Fade Animation
const handleHover = function(e){
  console.log(this, )
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

//Passing an 'Argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));


//Sticky Navigation
const initalCoords = section1.getBoundingClientRect();
console.log(initalCoords)
window.addEventListener('scroll', function(e) {
  console.log(this.window.scrollY);

  if(this.window.scrollY > initalCoords.top) nav.classList.add('sticky') 
  else nav.classList.remove('sticky')

})

//Sticky Navigation: INtersection Observer API
const obsCallback = function (entries, observer){
entries.forEach(entry => {
  console.log(entry);
})
}
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);


const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect();
console.log(navHeight)

const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else 
  nav.classList.add('sticky');
}
const headerObserver = new IntersectionObserver
(stickyNav,{
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px'`,
});

headerObserver.observe(header);


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

console.log(allButtons);


//Creating and inserting elemetns
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');

console.log(message);

message.innerHTML =
  'We use cookie for improved functionality and analytisc. <button class="btn btn--close-cookie"> Got it! </button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//Delete Elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styles


message.style.backgroundColor = '#37383d';
message.style.width = '220%';

console.log(`Background Color:  ${message.style.backgroundColor}`);

console.log(message.style.width);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//Atributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

console.log(logo.src);
console.log(logo.className);

console.log(logo.getAttribute('designer'));

logo.alt = 'beatiful minimalist logo';

logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

//Adata Attributes
// Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); 

*/

 



////////////////////////////////////////////////////////
//Types of Events and Event Handlers
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('onmouseenter: Great! you are reeading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! you are reeading the heading :D');
// };

//Remove an event in case we dont need anymore

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
