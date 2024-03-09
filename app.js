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
