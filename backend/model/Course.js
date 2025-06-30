import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    courseId:{ 
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video:{ 
       type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    },
})


const Course = mongoose.model('Course', courseSchema);

export { Course };
