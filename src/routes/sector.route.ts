import { Router } from 'express';
import { insertarSector, listarSectores } from '../controllers/sector.controller';

const router = Router();

router.get('/',listarSectores);
router.post('/',insertarSector);

export default router;
