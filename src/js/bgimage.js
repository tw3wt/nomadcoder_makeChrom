const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
const body = document.querySelector("body");

body.classList.add("img");

const randomBgImg = images[Math.floor(Math.random() * images.length)];

const definedBgImg = new Image();

definedBgImg.src = `./img/${randomBgImg}`;

document.body.style.backgroundImage = `url(${definedBgImg.src})`;
