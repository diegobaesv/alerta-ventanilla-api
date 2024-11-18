import { Router } from 'express';
import { insertarCategoria, listarCategorias } from '../controllers/categoria.controller';

const router = Router();

router.get('/',listarCategorias);
router.post('/',insertarCategoria);

export default router;
