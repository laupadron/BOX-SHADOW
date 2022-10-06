const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const spread = document.querySelector(".spread");
const blur = document.querySelector(".blur");
const colorShadow = document.querySelector(".color-shadow");
const borderRadius = document.querySelector(".border-radius");
const heightBox = document.querySelector(".heihth");
const widthBox = document.querySelector(".width");
const colorBox = document.querySelector(".color-box");
const windowCode = document.querySelector(".window-code");
const shadowBox = document.querySelector(".shadow-box");
const boxContainer = document.querySelector(".box-container");
const windowPa = document.querySelector(".window-p");


horizontal.addEventListener("input", (e) =>{ 
windowPa.innerHTML = `Box-shadow: ${e.target.value}px` ;
shadowBox.style.left = `${e.target.value}px`
});
