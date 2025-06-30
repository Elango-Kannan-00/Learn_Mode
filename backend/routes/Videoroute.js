import { AddVideo,getVideo,getBytopicId } from '../controllers/VideoControl.js';

import { Router } from 'express';

const router = Router();

router.post('/addvideo',AddVideo);
router.get('/getvideo/:courseName', getVideo);
router.get('/getvideo/:courseName/:videoId', getBytopicId);

export default router;
