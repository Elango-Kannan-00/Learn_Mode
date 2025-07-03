import { Router } from 'express';
import { RegisterUser, LoginUser,LogoutUser } from '../controllers/UserControl.js';
import { authVerify } from '../middleware/authVerify.js';
const router = Router();

router.post('/register', RegisterUser);
router.post('/login', LoginUser);
router.post('/logout',authVerify, LogoutUser);

export default router;
