'use script';
const btnContact = document.querySelector('.btn-contact');
const btnFun = document.querySelector('.btn-fun');
const aboutHistory = document.querySelector('.about-1-section');
const aboutLinks = document.querySelector('.contact-links');

btnContact.addEventListener('click', function () {
  aboutHistory.classList.add('hide');
  aboutLinks.classList.remove('hide');
  btnFun.style.backgroundColor = 'rgba(30, 143, 255, 0.699)';
  btnFun.style.transform = 'translateY(0)';
  btnContact.style.transform = 'translateY(-1rem)';
  btnContact.style.backgroundColor = 'rgba(0, 128, 0, 0.534)';
});
btnFun.addEventListener('click', function () {
  aboutHistory.classList.remove('hide');
  aboutLinks.classList.add('hide');
  btnFun.style.backgroundColor = 'rgba(30, 143, 255, 0.499)';
  btnFun.style.transform = 'translateY(-1rem)';
  btnContact.style.transform = 'translateY(0)';
  btnContact.style.backgroundColor = 'rgba(0, 128, 0, 0.836)';
});

// Dates*************
const monthEl = document.querySelector('.month');
const yearEL = document.querySelector('.year');
const dayEL = document.querySelector('.day');
const dayNumEL = document.querySelector('.day-num');
const watchEl = document.querySelector('.whatch');

const monthArry = [
  'January',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const daysArray = [
  'Isniin',
  'Talaado',
  'Arbaco',
  'Khamiis',
  'Jimco',
  'Sabti',
  'Axad',
];
function Dates() {
  let fullDate = new Date();

  let month = monthArry[fullDate.getMonth() * 1];
  let days = daysArray[fullDate.getDay() - 1];

  yearEL.innerHTML = fullDate.getFullYear();
  monthEl.innerHTML = month;
  dayEL.innerHTML = days;
  dayNumEL.innerHTML = fullDate.getDate();

  //whatch

  let currentWatch = `${
    fullDate.getHours() < 10 ? '0' + fullDate.getHours() : fullDate.getHours()
  }:${
    fullDate.getMinutes() < 10
      ? '0' + fullDate.getMinutes()
      : fullDate.getMinutes()
  }:${
    fullDate.getSeconds() < 10
      ? '0' + fullDate.getSeconds()
      : fullDate.getSeconds()
  } ${fullDate.getHours() < 12 ? 'AM' : 'PM'}`;

  watchEl.innerHTML = currentWatch;

  setInterval(function () {
    Dates();
  }, 1000);

  // setInterval(() => {
  //   Dates();
  // }, 1000);
}

Dates();

//Q and A section
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    question.classList.toggle('show-text');
  });
});

//
const fulldate = document.querySelector('.full-date');

let newDate = new Date();
let month = `${newDate.getMonth() + 1}`.padStart(2, 0);
let date = `${newDate.getDate()}`.padStart(2, 0);
let year = newDate.getFullYear();
fulldate.textContent = `${month}/${date}/${year}`;

//scrolling with out using html css
// document.querySelectorAll('.nav--links').forEach(function (value) {
//   value.addEventListener('click', function (e) {
//     console.log('links');
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__ul-link').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('nav--links')) {
    const id = e.target.getAttribute('href');
    //     console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//emplementing hover links
const nav = document.querySelector('.nav');
const mouseHandler = function (e) {
  if (e.target.classList.contains('nav--links')) {
    const link = e.target;
    console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav--links');
    const logo = link.closest('.nav').querySelector('h2');

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', mouseHandler.bind(0.5));
nav.addEventListener('mouseout', mouseHandler.bind(1));

//sticky navigation
const navHeight = nav.getBoundingClientRect().height;
const homeDive = document.querySelector('#home');
const navSticky = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const homeObserver = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

homeObserver.observe(homeDive);
