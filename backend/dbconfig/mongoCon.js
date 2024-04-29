import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const connect = async () => {
  console.log("check");
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected");
  } catch (error) {
    console.log("Error in mongoCon file: " + error);
  }
};
