import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readProducts } from '../utils/readProduct.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (product) => {
  const products = await readProducts();
  for (let i = 0; i < product; i++) {
    const product = createFakeProduct();
    products.push(product);
  }
  await writeProducts(products);
};
generateProducts(5);
