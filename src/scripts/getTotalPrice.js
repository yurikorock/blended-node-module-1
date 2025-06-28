import { readProducts } from '../utils/readProduct.js';

export const getTotalPrice = async () => {
  const products = await readProducts();
  return products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);
};
console.log('Загальна вартість продуктів: ', await getTotalPrice());
// Задача 3

// Створіть файл src/scripts/getTotalPrice.js.
// В ньому опишіть функцію getTotalPrice.
// Вона має повертати загальну вартість продуктів
// в масиві у файлі src / db / db.json.

// Додайте в цьому файлі логування результату виклику функції getTotalPrice.
// Додайте до файлу package.json скрипт get-total-price
// для виконання коду з файлу src / scripts / getTotalPrice.js.
// Виконавши скрипт get - total - price, переконайтесь,
// що ваша функція getTotalPrice коректно рахує
// загальну вартість продуктів з масиву файлу.
