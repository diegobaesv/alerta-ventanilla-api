import { Router } from 'express';
import { listarSectores } from '../controllers/sector.controller';

const router = Router();

router.get('/',listarSectores);

export default router;
