import mongoose from "mongoose";

export const dbConnection = async () => {
  await mongoose.connect(
    `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URI}`
  );
};
