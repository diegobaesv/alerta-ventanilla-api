import { Router } from 'express';
import { eliminarUnidad, insertarUnidad } from '../controllers/unidad.controller';


const router = Router();

router.post('/',insertarUnidad);
router.delete('/:idUnidad',eliminarUnidad);

export default router;