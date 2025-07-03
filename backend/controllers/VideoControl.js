import { Video } from '../model/Video.js';

const AddVideo = async (req, res) => {
  try {
    const { videoId, title, description, src, topic } = req.body;

    const newVideo = new Video({
      videoId,
      title,
      description,
      src,
      topic
    });

    await newVideo.save();

       res.status(201).json({
      message: 'Video added successfully',
    });


  } catch (err) {
    console.error('Error adding video:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getVideo = async (req, res) => {
  try {
    const { courseName } = req.params;
   console.log('Fetching video for course:', courseName);
    const course = await Video.find({
      topic: courseName
    }) // Note: 'videos' (plural) if it's an array
   
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    if (!course || course.length === 0) {
      return res.status(404).json({ message: 'No videos found for this course' });
    }

     

    res.status(200).json(course);
  }
  catch (err) {
    console.error('Error fetching video:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}


const getBytopicId = async (req,res) =>{ 
  try {
    const { courseName , videoId } = req.params;

    const video = await Video.findOne({ 
      topic: courseName,
      videoId: videoId
    });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json(video);
  }
  catch (err) {
    console.error('Error fetching video by topic and ID:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
 export { AddVideo, getVideo, getBytopicId };
