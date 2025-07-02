import { Course } from '../model/Course.js';
import { Video } from '../model/Video.js';

const AddCourse = async (req, res) => {
  try {
    const { courseId, name, description } = req.body;
    if (!courseId || !name || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const existingCourse = await Course.findOne({
      courseId
    });
    if (existingCourse) {
      return res.status(400).json({ message: 'Course already exists' });
    }
    const newCourse = new Course({
      courseId,
      name,
      description,
    });

    await newCourse.save();
    res.status(201).json({
      message: 'Course added successfully',
      course: newCourse
    });
  } catch (err) {
    console.error('Error adding course:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('video');
    res.status(200).json(courses);
  } catch (err) {
    console.error('Error getting courses:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const GetCourseByName = async (req, res) => {
  try {
    const course = await Course.find(req.query.name).populate('video');
    console.log(course);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  }
  catch (err) {
    console.error('Error getting course:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export { AddCourse, GetAllCourses, GetCourseByName };

