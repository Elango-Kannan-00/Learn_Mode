import { AddVideo,getVideo,getBytopicId } from '../controllers/VideoControl.js';
import { authVerify } from '../middleware/authVerify.js';

import { Router } from 'express';

const router = Router();

router.post('/addvideo',AddVideo);
router.get('/getvideo/:courseName',authVerify, getVideo);
router.get('/getvideo/:courseName/:videoId',authVerify, getBytopicId);

export default router;

