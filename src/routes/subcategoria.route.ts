import { Router } from 'express';
import { listarSubcategoriasByCategoria } from '../controllers/subcategoria.controller';

const router = Router();

router.get('/categoria/:idCategoria',listarSubcategoriasByCategoria);

export default router;

