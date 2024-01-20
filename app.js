'use script';
const btnContact = document.querySelector('.btn-contact');
const btnFun = document.querySelector('.btn-fun');
const aboutHistory = document.querySelector('.about-1-section');
const aboutLinks = document.querySelector('.contact-links');

console.log(btnContact, btnFun, aboutHistory, aboutLinks);

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
