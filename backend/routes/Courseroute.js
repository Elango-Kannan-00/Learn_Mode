import { AddCourse,GetAllCourses, GetCourseByName } from '../controllers/CourseControl.js'

import { Router } from 'express';

const router = Router();

router.post('/addcourse', AddCourse);
router.get('/getcourse', GetAllCourses);
router.get('/:name', GetCourseByName);

export default router;
