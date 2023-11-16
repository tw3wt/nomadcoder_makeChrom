const images = ["beom1.jpg"];
const body = document.querySelector("body");

body.classList.add("img");

const randomBgImg = images[0];

const definedBgImg = new Image();
definedBgImg.src = `https://tw3wt.github.io/nomadcoder_makeChrome/img/${randomBgImg}`;
definedBgImg.style.width = '15px';
definedBgImg.style.height = '15px';

document.body.style.backgroundImage = `url(${definedBgImg.src})`;
