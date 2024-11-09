import { Router } from 'express';
import { insertarVecino } from '../controllers/vecino.controller';


const router = Router();

router.post('/',insertarVecino);

export default router;
