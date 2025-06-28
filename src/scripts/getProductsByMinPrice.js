import { readProducts } from '../utils/readProduct.js';

export const getProductsByMinPrice = async (minPrice) => {
  const products = await readProducts();

  return products.filter((product) => product.price >= minPrice);
};
console.log(await getProductsByMinPrice(400));

// Задача 2

// Створіть файл src/scripts/getProductsByMinPrice.js.
// В ньому опишіть функцію getProductsByMinPrice.

// Вона має приймати параметром значення вартості і
// повертати масив продуктів із файлу src / db / db.json,
// вартість яких дорівнює або перевищує значення параметра функції.

// Додайте в цьому файлі логування результату виклику функції getProductsByMinPrice.
// Додайте до файлу package.json скрипт get-products-by-min-price
// для виконання коду з файлу src / scripts / getProductsByMinPrice.js.
// Виконавши скрипт get - products - by - min - price, переконайтесь,
//     що ваша функція getProductsByMinPrice працює коректно.
