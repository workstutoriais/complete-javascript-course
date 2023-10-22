'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

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

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('LINK');
    const id = this.getAttribute('href');
  });
});
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
