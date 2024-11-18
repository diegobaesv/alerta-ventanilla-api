import { Router } from 'express';
import { insertarSerenazgo } from '../controllers/serenazgo.controller';

const router = Router();

router.post('/',insertarSerenazgo);

export default router;

