const btn = document.getElementById("btn");
const colorLabel = document.querySelector(".color");

let red = getRandomInteger(0, 255);
let green = getRandomInteger(0, 255);
let blue = getRandomInteger(0, 255);

const colors = { red, green, blue };
let nextColors = { red, green, blue };

document.addEventListener("DOMContentLoaded", function(_) { 
  const rgbString = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
  document.body.style.backgroundColor = rgbString;
  colorLabel.textContent = rgbString;
});

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", () => {
  const randomRed = getRandomInteger(0, 255);
  const randomGreen = getRandomInteger(0, 255);
  const randomBlue = getRandomInteger(0, 255);
  nextColors = { red: randomRed, green: randomGreen, blue: randomBlue };
  const rgbString = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  console.log(rgbString);
  
  transitionToColor();
});

function transitionToColor() {
  if(nextColors.red !== colors.red ) {
    colors.red > nextColors.red ? colors.red-- : colors.red++ 
  }
  if(nextColors.green !== colors.green ) {
    colors.green > nextColors.green ? colors.green-- : colors.green++ 
  }
  if(nextColors.blue !== colors.blue ) {
    colors.blue > nextColors.blue ? colors.blue-- : colors.blue++ 
  }

  const rgbString = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
  document.body.style.backgroundColor = rgbString;
  colorLabel.textContent = rgbString;

  if(colors !== nextColors){
    setTimeout(() => transitionToColor(), 1);
  }
}
