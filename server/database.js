import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({path:".env"})
const connectionString = process.env.ATLAS_URI;

const connectToDB = async () => {
  try {
      await mongoose.connect(connectionString, {
          autoIndex: true
      })
      console.log('Connected to Mongodb Atlas');

  } catch (error) {
      console.error(error);
  }
}

export default connectToDB;