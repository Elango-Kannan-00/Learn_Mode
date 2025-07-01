import { Router } from 'express';
import { RegisterUser, LoginUser,LogoutUser } from '../controllers/UserControl.js';

const router = Router();

router.post('/register', RegisterUser);
router.post('/login', LoginUser);
router.post('/logout', LogoutUser);

export default router;
