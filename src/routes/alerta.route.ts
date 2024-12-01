import { Router } from 'express';
import { asignarSereno, actualizarAlerta, insertarAlerta, listarAlertasBySerenazgo, listarAlertasByVecino } from '../controllers/alerta.controller';

const router = Router();

router.post('/',insertarAlerta);
router.put('/:idAlerta/sereno',asignarSereno);
router.get('/serenazgo/:idSerenazgo',listarAlertasBySerenazgo);
router.get('/vecino/:idVecino',listarAlertasByVecino);
router.put('/:idAlerta',actualizarAlerta);
export default router;
