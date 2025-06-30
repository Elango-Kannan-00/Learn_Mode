import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
 path: './.env'
});

const connectDB = async ( url ) => { 
  try{ 
    await mongoose.connect(url);
    console.log('MongoDB connected successfully');
  }catch(err)
{ 
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }

}

export { connectDB };
