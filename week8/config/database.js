/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('DB Connection Successful'))
    .catch((error) => {
      console.log('Error in DB Connection');
      console.error(error.message);
      process.exit(1);
    });
};

export default dbConnect;
