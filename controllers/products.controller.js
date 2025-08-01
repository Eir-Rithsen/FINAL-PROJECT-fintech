import * as service from '../services/products.service.js';

export const getAll = async (req, res) => {
  const data = await service.list();
  res.json(data);
};

export const getOne = async (req, res) => {
  const product = await service.get(req.params.id);
  product ? res.json(product) : res.status(404).json({ error: 'No encontrado' });
};

export const create = async (req, res) => {
  const newProd = await service.create(req.body);
  res.status(201).json(newProd);
};

export const remove = async (req, res) => {
  await service.remove(req.params.id);
  res.status(204).end();
};
