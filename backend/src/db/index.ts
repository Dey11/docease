import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("DataBase is successfully connected.");
  } catch (error) {
    console.log("Error to connect Database.");
  }
};

export default connectToMongoDB;
