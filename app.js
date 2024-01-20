'use script';
const btnContact = document.querySelector('.btn-contact');
const btnFun = document.querySelector('.btn-fun');
const aboutHistory = document.querySelector('.about-1-section');
const aboutLinks = document.querySelector('.contact-links');

console.log(btnContact, btnFun, aboutHistory, aboutLinks);

btnContact.addEventListener('click', function () {
  aboutHistory.classList.add('hide');
  aboutLinks.classList.remove('hide');
});
btnFun.addEventListener('click', function () {
  aboutHistory.classList.remove('hide');
  aboutLinks.classList.add('hide');
});
