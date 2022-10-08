const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const spread = document.querySelector(".spread");
const blurType = document.querySelector(".blur");
const colorShadow = document.querySelector(".color-shadow");
const radiuBorder = document.querySelector(".border-radius");
const heightBox = document.querySelector(".height");
const widthBox = document.querySelector(".width");
const colorBox = document.querySelector(".color-box");
const windowCode = document.querySelector(".window-code");
const shadowBox = document.querySelector(".shadow-box");
const boxContainer = document.querySelector(".box-container");
const windowPa = document.querySelector(".window-p");
const box = document.querySelector(".box");


horizontal.addEventListener("input", (e) =>{ 
  horizontalContent= `${e.target.value}`;
  shadowBox.style.left = `${horizontalContent}px`;
  windowPa.textContent = `box-shadow: ${horizontalContent}px`;
});

vertical.addEventListener("input", (e) =>{ 
  verticalContent= `${e.target.value}`;
  shadowBox.style.top = `${verticalContent}px`;
  windowPa.textContent =`${verticalContent}px`
  windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px`;

});

spread.addEventListener("input", (e) =>{ 
  spreadContent = `${e.target.value}`;
  shadowBox.style.width = `${spreadContent}px`;
  shadowBox.style.height = `${spreadContent}px`;
  windowPa.textContent = `${spreadContent}px`;
  windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px ${spreadContent}px`
});





colorShadow.addEventListener("input", (e) =>{ 
  colorShadowContent= `${e.target.value}`;
  colorShadow.onchange = ((value) => {
  shadowBox.style.backgroundColor = colorShadow.value;
} )
windowPa.textContent = `${colorShadowContent}rgba`;
windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px ${spreadContent}px ${colorShadowContent}rgba`
});

radiuBorder.addEventListener("input", (e) =>{ 
  radiusContent = `${e.target.value}`;
  shadowBox.style.borderRadius = `${radiusContent}%`
  box.style.borderRadius = `${radiusContent}%`
  windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px ${spreadContent}px ${colorShadowContent}rgba ${radiusContent}%`
  });

  heightBox.addEventListener("input", (e) =>{ 
    heightContent = `${e.target.value}`;
    shadowBox.style.height = `${heightContent}px`
    box.style.height = `${heightContent}px`
    windowPa.textContent = `${heightContent}px`;
    windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px ${spreadContent}px ${colorShadowContent}rgba ${radiusContent}% ${heightContent}px`
    });

    widthBox.addEventListener("input", (e) =>{ 
      widthContent = `${e.target.value}`;
      shadowBox.style.width = `${widthContent}px`
      box.style.width = `${widthContent}px`
      windowPa.textContent = `${widthContent}px`; 
      windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px ${spreadContent}px ${colorShadowContent}rgba ${radiusContent}% ${heightContent}px ${widthContent}px`
      });

      colorBox.addEventListener("click", (e) =>{ 
        colorBoxContent= `${e.target.value}`;
        colorBox.onchange = ((value) => {
        colorBox.style.backgroundColor = colorBox.value;
      } )
      windowPa.textContent = `${colorBoxContent}rgba`;
      windowPa.textContent = `box-shadow: ${horizontalContent}px ${verticalContent}px ${spreadContent}px ${colorShadowContent}rgba ${colorBoxContent}rgba`
      });


















        
