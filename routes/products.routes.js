import { Router } from 'express';
import * as controller from '../controllers/products.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/create', authenticate, controller.create);
router.delete('/:id', authenticate, controller.remove);

export default router;
