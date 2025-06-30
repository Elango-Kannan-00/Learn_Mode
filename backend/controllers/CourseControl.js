import { Course } from '../model/Course.js';
import { Video } from '../model/Video.js';

const AddCourse = async (req, res) => {
  try {
    const { courseId, name, description } = req.body;
    if (!courseId || !name || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const videocontent = await Video.findOne({ topic: name });
    if (!videocontent) {
      return res.status(404).json({ message: 'Video not found for the specified topic' });
    }

    const newCourse = new Course({
      courseId,
      name,
      description,
      video: videocontent._id
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

const GetCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('video');
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
export { AddCourse, GetAllCourses, GetCourseById };

