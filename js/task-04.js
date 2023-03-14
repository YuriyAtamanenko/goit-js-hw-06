// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onBtnDecrement);
incrementBtn.addEventListener("click", onBtnIncrement);

function onBtnDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function onBtnIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
