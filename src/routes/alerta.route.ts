import { Router } from 'express';
import { asignarSereno, insertarAlerta } from '../controllers/alerta.controller';

const router = Router();

router.post('/',insertarAlerta);
router.put('/:idAlerta/sereno',asignarSereno);

export default router;
