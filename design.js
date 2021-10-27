const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};
const navLink = document.querySelectorAll("nav-link").forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};

var ul = document.querySelector(".slider");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
const firstLi = document.querySelector(`.picone`);
const secondLi = document.querySelector(`.pictwo`);
const thirdLi = document.querySelector(`.picthree`);
const fourthhLi = document.querySelector(`.picfour`);
let photosGallery = ["camping.jpg", "gaming.jpg", "hiking.jpg", "reading.jpg"];

let index = 0;

function showImage(image, source) {
  image.src = source;
}

nextButton.addEventListener("click", () => {
  ++index;
  renderPic();
});

function renderPic() {
  showImage(firstLi, photosGallery[index % photosGallery.length]);
  showImage(firstLi, photosGallery[(index + 1) % photosGallery.length]);
  showImage(firstLi, photosGallery[(index + 2) % photosGallery.length]);
  showImage(firstLi, photosGallery[(index + 3) % photosGallery.length]);
}

prevButton.addEventListener(`click`, () => {
  ++index;
  renderPic();
});
