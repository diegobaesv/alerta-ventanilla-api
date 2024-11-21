import { Router } from 'express';
import { insertarSubsector, listarSubsectoresBySector } from '../controllers/subsector.controller';

const router = Router();

router.get('/sector/:idSector',listarSubsectoresBySector);
router.post('/',insertarSubsector);
export default router;
