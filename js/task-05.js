// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const refs = {
  name: document.querySelector("#name-output"),
  input: document.querySelector("#name-input"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.name.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.name.textContent = "Anonymous";
  }
}
