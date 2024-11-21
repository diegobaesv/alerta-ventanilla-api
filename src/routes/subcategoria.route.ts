import { Router } from 'express';
import { insertarSubcategoria, listarSubcategoriasByCategoria } from '../controllers/subcategoria.controller';

const router = Router();

router.get('/categoria/:idCategoria',listarSubcategoriasByCategoria);
router.post('/',insertarSubcategoria);

export default router;

