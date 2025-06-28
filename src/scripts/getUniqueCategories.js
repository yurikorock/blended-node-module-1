import { readProducts } from '../utils/readProduct.js';

export const getUniqueCategories = async () => {
  const products = await readProducts();
  //   const uniqueCategories = [];
  const categories = new Set();
  for (const categ of products) {
    categories.add(categ.category);
  }
  return [...categories];
};
console.log('Це наші унікальні категорії:', await getUniqueCategories());

// Задача 4

// Створіть файл src/scripts/getUniqueCategories.js.
// В ньому опишіть функцію getUniqueCategories.
// Вона має повертати масив унікальних категорій,
// які мають продукти в масиві у файлі src / db / db.json.

// Додайте в цьому файлі логування результату виклику функції getUniqueCategories.
// Додайте до файлу package.json скрипт get-unique-categories для виконання коду
// з файлу src / scripts / getUniqueCategories.js.
// Виконавши скрипт get - unique - categories, переконайтесь, що ваша функція
// getUniqueCategories коректно повертає унікальні категорії, які мають продукти в масиві у файлі src / db / db.json.
