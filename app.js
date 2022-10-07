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
  horizontalContent= `${e.target.value}`;
  shadowBox.style.left = `${horizontalContent}px`;
  windowPa.textContent = `box-shadow: ${horizontalContent}px`;
});

vertical.addEventListener("input", (e) =>{ 
  verticalContent= `${e.target.value}`;
  shadowBox.style.top = `${verticalContent}px`;
  windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}`;
});

spread.addEventListener("input", (e) =>{ 
  spreadContent = `${e.target.value}`;
  shadowBox.style.width = `${spreadContent}px`;
  shadowBox.style.height = `${spreadContent}px`;
  windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px ${spreadContent}px`;
});



colorShadow.addEventListener("input", (e) =>{ 
  colorShadowContent= `${e.target.value}`;
  colorShadow.onchange = ((value) => {
  shadowBox.style.backgroundColor = colorShadow.value;
} )
  windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px ${spreadContent} ${colorShadowContent}rgb`;
});

blur.addEventListener("input", (e) =>{ 
  blurContent= `${e.target.value}`;
  shadowBox.style.blur = `${blurContent}px`;
  windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent} ${spreadContent} ${colorShadowContent}rgb ${blurContent}`;
});

















        
