import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => console.log("Connected to the db"));
  } catch (error) {
    console.log("can't connect to the db");
  }
};
