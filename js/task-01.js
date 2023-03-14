// 1. Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.

const CategoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${CategoriesRef.length}`);

// 2. Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

CategoriesRef.forEach((categoriy) => {
  console.log(`Category: ${categoriy.querySelector("h2").textContent}`);
  console.log(`Elements: ${categoriy.querySelectorAll("li").length}`);
});
