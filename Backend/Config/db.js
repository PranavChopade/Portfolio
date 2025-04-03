import mongoose from "mongoose";

async function connectDB() {
  try {

    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`connected to the MongoDB`);

  } catch (error) {
    console.log(`connection failed! unable to connect with mongoDB ${error.message}`);
    process.exit(1)
  }
}
export default connectDB