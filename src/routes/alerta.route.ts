import { Router } from 'express';
import { insertarAlerta } from '../controllers/alerta.controller';

const router = Router();

router.post('/',insertarAlerta);

export default router;
