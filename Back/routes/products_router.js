import express from 'express';

import { getProducts, getProductById, filterProducts, createProduct } from '../controllers/products_controllers.js';

const router = express.Router()

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/filter', filterProducts);
router.post('/publish/product', createProduct);

export default router