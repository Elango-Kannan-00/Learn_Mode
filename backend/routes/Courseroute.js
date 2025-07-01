import { AddCourse,GetAllCourses, GetCourseByName } from '../controllers/CourseControl.js'
import { authVerify } from '../middleware/authVerify.js';
import { Router } from 'express';

const router = Router();

router.post('/addcourse', AddCourse);
router.get('/getcourse',authVerify, GetAllCourses);
router.get('/:name',authVerify, GetCourseByName);

export default router;
