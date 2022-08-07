const btn = document.getElementById("btn");
const colorLabel = document.querySelector(".color");

let currentColor = 0xf1f5f8;

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", () => {
  const sign = getRandomInteger(0, 1);
  const randomColor = getRandomInteger(currentColor, currentColor + ((sign === 0 ? -1 : 1) * 0xff));
  console.log(randomColor.toString(16));
  nextColor(randomColor);
});

function nextColor(newColor) {
  if (currentColor !== newColor) {
    currentColor > newColor ? currentColor-- : currentColor++;
    const hexString = `#${currentColor.toString(16)}`
    document.body.style.backgroundColor = hexString;
    colorLabel.textContent = hexString;
    setTimeout(() => nextColor(newColor), 1);
  }
}
