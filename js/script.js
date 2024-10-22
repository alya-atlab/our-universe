let toggleMenu = document.getElementById("toggle-menu");

let mainUl = document.getElementById("main-ul");
console.log(mainUl);
let smallNav = false;
toggleMenu.addEventListener("click", () => {
  smallNav = !smallNav;
  if (smallNav) {
    mainUl.classList.add("menu");
  } else {
    mainUl.classList.remove("menu");
  }
});

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain1 = document.getElementById("mountain1");
let mountain2 = document.getElementById("mountain2");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let ourGalaxy = document.getElementById("our-galaxy");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = `${value}px`;
  moon.style.top = `${value * 4}px`;
  boat.style.left = `${value * 3}px`;
  boat.style.top = `${value}px`;
  mountain1.style.top = `${value * 2}px`;
  mountain2.style.top = `${value * 1.5}px`;
  river.style.top = `${value}px`;
  ourGalaxy.style.fontSize = `${value}px`;
  if (value >= 60) {
    ourGalaxy.style.fontSize = `60px`;
  }
  if (value >= 388) {
    ourGalaxy.style.display = "none";
  } else {
    ourGalaxy.style.display = "block";
  }
  if (value >= 130) {
    document.querySelector(".landing .main").style.background =
      "linear-gradient(#1c7a9c, #200016)";
  } else {
    document.querySelector(".landing .main").style.background =
      "linear-gradient(#0d031f, #0e021a)";
  }
  if (value >= 1000) {
    document.getElementById("explore-title").classList.add("start");
  } else {
    document.getElementById("explore-title").classList.remove("start");
  }
  if (window.innerWidth <= 768) {
    if (value >= 1900) {
      document.getElementById("explore-title").classList.add("start");
    } else {
      document.getElementById("explore-title").classList.remove("start");
    }
  }
});
let eachPlanet = document.getElementById("each-planet");
let planets = document.getElementById("planets");
let audioElement = new Audio();
planets.addEventListener("click", () => {
  audioElement.src = "galaxy.mp3";
  audioElement.play();
  let li = document.querySelectorAll(".each-planet ul li a");
  li.forEach((element) => {
    element.classList.add("animated");
  });
  setTimeout(() => {
    li.forEach((element) => {
      element.classList.remove("animated");
    });
  }, 6000);
  let main = document.getElementById("main");
  let header = document.querySelector("header");
  let close = document.getElementById("close");
  setTimeout(() => {
    close.style.display = "block";
  }, 6000);
  close.addEventListener("click", () => {
    eachPlanet.style.display = "none";
    main.style.filter = "none";
    header.style.filter = "none";
  });
  main.style.filter = "blur(20px)";
  header.style.filter = "blur(20px)";
  eachPlanet.style.display = "block";
  let ePlanet = document.querySelectorAll("#each-planet li");
  ePlanet.forEach((element) => {
    element.addEventListener("click", () => {
      eachPlanet.style.display = "none";
      main.style.filter = "none";
      header.style.filter = "none";
    });
  });
});

let imgs = document.querySelectorAll(".imgs");
console.log(imgs);
let n = 0;
setInterval(() => {
  if (imgs[n].classList.contains("on")) {
    if (n == 4) {
      imgs[0].classList.add("on");
      imgs[4].classList.remove("on");

      n++;
    } else {
      imgs[n].classList.remove("on");
      imgs[++n].classList.add("on");
    }
  }
  if (n == 5) {
    n = 0;
  }
}, 2000);
