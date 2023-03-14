function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change - color і виводить значення кольору в span.color.

const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const pageBody = document.querySelector("body");

changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  pageBody.style.backgroundColor = getRandomHexColor();
  colorName.textContent = `${pageBody.style.backgroundColor}`;
}
