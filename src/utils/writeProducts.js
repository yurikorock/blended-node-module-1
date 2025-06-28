import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (data) => {
  const products = JSON.stringify(data, null, 2);
  await fs.writeFile(PATH_DB, products, 'utf-8');
};
