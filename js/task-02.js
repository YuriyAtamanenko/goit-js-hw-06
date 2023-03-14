const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const itemsContainerRef = document.querySelector("#ingredients");

const creatIngredientsItem = (items) => {
  return items.map((item) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = item;
    itemRef.classList.add("item");

    return itemRef;
  });
};

const elements = creatIngredientsItem(ingredients);

itemsContainerRef.append(...elements);
