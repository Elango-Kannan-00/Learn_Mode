import { Video } from '../model/Video.js';

const AddVideo = async(req,res) =>{
  try { 
    const { videoId, title , description, src , topic } = req.body;

    const newVideo = new Video({
      videoId,
      title,
      description,
      src,
      topic
    });

    await newVideo.save();

    res.status(201)
        .json({ 
          message: 'Video added successfully',
          video: newVideo
        });

  }catch(err) { 
    console.error('Error adding video:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const getVideo = async(req,res) => {
  try {
    const { courseName,videoId } = req.params.id;

    const video = await Video.findOne({
      courseName: courseName,
      videoId: videoId
    })

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.status(200).json(video);
  }
  catch (err) {
    console.error('Error fetching video:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export { AddVideo, getVideo };
