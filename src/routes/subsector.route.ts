import { Router } from 'express';
import { listarSubsectoresBySector } from '../controllers/subsector.controller';

const router = Router();

router.get('/sector/:idSector',listarSubsectoresBySector);

export default router;
