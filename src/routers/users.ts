import { Router } from 'express';
import { dashboard } from '../controllers/users/controller';

const router = Router();

router.get('/dashboard', dashboard);

export default router;