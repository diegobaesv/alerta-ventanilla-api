import { Router } from 'express';
import { render, renderLogin } from '../controllers/views.controller';

const router = Router();

router.get('/', (req, res) => {
    res.redirect('/login')
});

router.get('/login', renderLogin);
router.get('/:page', render)

export default router;