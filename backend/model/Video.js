import mongoose from 'mongoose';


const videoSchema = new mongoose.Schema({
    videoId: { 
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    src: { 
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    }
});

const Video = mongoose.model('Video', videoSchema);

export { Video };
