import mongoose from 'mongoose';

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is required. Create server/.env from server/.env.example and add your MongoDB Atlas connection string.');
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(uri);
}
