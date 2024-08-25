"use script";
const btnContact = document.querySelector(".btn-contact");
const btnFun = document.querySelector(".btn-fun");
const aboutHistory = document.querySelector(".about-1-section");
const aboutLinks = document.querySelector(".contact-links");

btnContact.addEventListener("click", function () {
  aboutHistory.classList.add("hide");
  aboutLinks.classList.remove("hide");
  btnFun.style.backgroundColor = "rgba(30, 143, 255, 0.699)";
  btnFun.style.transform = "translateY(0)";
  btnContact.style.transform = "translateY(-1rem)";
  btnContact.style.backgroundColor = "rgba(0, 128, 0, 0.534)";
});
btnFun.addEventListener("click", function () {
  aboutHistory.classList.remove("hide");
  aboutLinks.classList.add("hide");
  btnFun.style.backgroundColor = "rgba(30, 143, 255, 0.499)";
  btnFun.style.transform = "translateY(-1rem)";
  btnContact.style.transform = "translateY(0)";
  btnContact.style.backgroundColor = "rgba(0, 128, 0, 0.836)";
});

// Dates*************
const monthEl = document.querySelector(".month");
const yearEL = document.querySelector(".year");
const dayEL = document.querySelector(".day");
const dayNumEL = document.querySelector(".day-num");
const watchEl = document.querySelector(".whatch");

const monthArry = [
  "January",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const daysArray = [
  "Isniin",
  "Talaado",
  "Arbaco",
  "Khamiis",
  "Jimco",
  "Sabti",
  "Axad",
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
    fullDate.getHours() < 10 ? "0" + fullDate.getHours() : fullDate.getHours()
  }:${
    fullDate.getMinutes() < 10
      ? "0" + fullDate.getMinutes()
      : fullDate.getMinutes()
  }:${
    fullDate.getSeconds() < 10
      ? "0" + fullDate.getSeconds()
      : fullDate.getSeconds()
  } ${fullDate.getHours() < 12 ? "AM" : "PM"}`;

  watchEl.innerHTML = currentWatch;

  setInterval(function () {
    Dates();
  }, 1000);

  // setInterval(() => {
  //   Dates();
  // }, 1000);
}

Dates();
const lastYears = document.querySelector(".lastyears");
let lastYear = new Date();
lastYears.textContent = lastYear.getFullYear() - 2019;

//Q and A section
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});

//
const fulldate = document.querySelector(".full-date");

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

document.querySelector(".nav__ul-link").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav--links")) {
    const id = e.target.getAttribute("href");
    //     console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//emplementing hover links
const nav = document.querySelector("nav");
const mouseHandler = function (e) {
  if (e.target.classList.contains("nav--links")) {
    const link = e.target;
    console.log(link);
    const siblings = link.closest(".nav").querySelectorAll(".nav--links");
    const logo = link.closest(".nav").querySelector("h2");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", mouseHandler.bind(0.5));
nav.addEventListener("mouseout", mouseHandler.bind(1));

//sticky navigation
const navHeight = nav.getBoundingClientRect().height;
const homeDive = document.querySelector("#home");
const navSticky = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const homeObserver = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

homeObserver.observe(homeDive);

//revealing sections in smooth transition

const allsection = document.querySelectorAll(".sections");

const revealingSections = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observe.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealingSections, {
  root: null,
  threshold: 0.15,
});

allsection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//lazy imng loading
const imgtargets = document.querySelectorAll("img[data-src]");

const loading = function (entries, observe) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
  if (!entry.isIntersecting) return;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
};

const omgobserve = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
});

imgtargets.forEach((img) => omgobserve.observe(img));

console.log(imgtargets);

//removing sticky element

const resizeFun = function () {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 600) {
    console.log("sticky 600");
    nav.classList.remove("sticky");
    nav.classList.add("navmeida");
  }
};
window.addEventListener("resize", resizeFun);
resizeFun();

//Span numbers counter

const counterSpans = document.querySelectorAll(".spanunter");

const counterFunc = function () {
  counterSpans.forEach((count) => {
    count.innerHTML = "0";
    incrementCouter();
    function incrementCouter() {
      let currentNumber = +count.innerHTML;
      const dataCeil = count.getAttribute("data-ceil");
      // const dataCeil = count.dataset.ceil;

      const increment = dataCeil / 13;
      currentNumber = Math.floor(currentNumber + increment);

      if (currentNumber < dataCeil) {
        count.innerHTML = `${new Intl.NumberFormat("US").format(
          currentNumber
        )}`;
        setTimeout(incrementCouter, 700);
      } else {
        count.innerText = `${new Intl.NumberFormat("US").format(dataCeil)}`;
      }
    }
  });
};

const expreience = document.querySelector(".experiance");
const exp = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    console.log("Expreince available");
    counterFunc();
  }
};
const observeExpreince = new IntersectionObserver(exp, {
  root: null,
  threshold: 0,
});

observeExpreince.observe(expreience);

//Mobile Navigation 600px
const openNav = document.querySelector(".mobil-Open");
const closeNav = document.querySelector(".mobile-close");

openNav.addEventListener("click", function () {
  nav.style.transform = "translateX(0)";
  this.classList.toggle("mobileHide");
  closeNav.classList.toggle("mobileHide");
});
closeNav.addEventListener("click", function () {
  nav.style.transform = "translateX(-100%)";
  this.classList.toggle("mobileHide");
  openNav.classList.toggle("mobileHide");
});

allsection.forEach((section) => {
  section.addEventListener("click", function () {
    nav.style.transform = "translateX(-100%)";
    closeNav.classList.toggle("mobileHide");
    openNav.classList.toggle("mobileHide");
  });
});

// map
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      console.log(pos);
      const { latitude } = pos.coords;
      const { longitude } = pos.coords;
      const coords = [latitude, longitude];
      console.log(coords);
      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://tile.openstreetmap.fr/hot//{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert("not allowed location");
    }
  );
