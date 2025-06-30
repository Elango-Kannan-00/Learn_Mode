import { AddVideo } from '../controllers/VideoControl.js';

import { Router } from 'express';

const router = Router();

router.post('/addvideo',AddVideo);

export default router;
