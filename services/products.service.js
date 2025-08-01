import * as Product from '../models/product.model.js';

export const list = () => Product.getAllProducts();
export const get = (id) => Product.getProductById(id);
export const create = (data) => Product.createProduct(data);
export const remove = (id) => Product.deleteProduct(id);
