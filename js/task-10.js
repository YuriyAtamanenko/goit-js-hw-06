function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

const input = document.querySelector("input");
const divsBox = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

input.addEventListener("input", changeInput);
createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", onDestroyBtn);

function changeInput() {}

function onCreateBtn() {
  Number(input.value) <= input.max && Number(input.value) >= input.min
    ? createBoxes(input.value)
    : alert("Введено не коректне значення. Введіть число від 1 до 100");
}

function createBoxes(amount) {
  let dimensions = 30;
  const newBoxCollection = [];
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.height = `${dimensions}px`;
    newBox.style.width = `${dimensions}px`;

    newBoxCollection.push(newBox);

    dimensions += 10;
  }

  divsBox.append(...newBoxCollection);
}

function onDestroyBtn() {
  divsBox.innerHTML = "";
  input.value = "";
}
