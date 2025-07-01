import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/connect.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/Userroute.js';
import videoRoutes from './routes/Videoroute.js';
import courseRoutes from './routes/Courseroute.js';

dotenv.config({
 path:'/.env'
}
)

const backend = express();
backend.use(cookieParser());
backend.use(cors());
backend.use(express.json());


backend.use('/api/user', userRoutes);
backend.use('/api/video', videoRoutes);
backend.use('/api/course', courseRoutes);

connectDB(process.env.MONGO_URL)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

backend.listen(`${process.env.PORT}`, ()=>{ 
  console.log('Server is running' );
})
