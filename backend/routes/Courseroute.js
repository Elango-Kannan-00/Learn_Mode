import { AddCourse, GetCourseById } from '../controllers/CourseControl.js'

import { Router } from 'express';

const router = Router();

router.post('/addcourse', AddCourse);
router.get('/:id', GetCourseById);

export default router;
