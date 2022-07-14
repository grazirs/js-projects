const value = document.querySelector("#value")
const buttons = document.querySelectorAll(".btn")
let count = 0;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("btn--decrease")) {
      count--;
    } else if (styles.contains("btn--increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  })
})