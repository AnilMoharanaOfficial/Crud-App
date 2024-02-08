import mongoose from "mongoose";

const mongoDB =
  process.env.DATABASE_URI ||
  "mongodb+srv://anilmoharana:BiX6IVWdcVmM60vc@cluster0.wmbnw45.mongodb.net/CRUD_APP";

const connectToDb = async () => {
  try {
    const { connection } = await mongoose.connect(mongoDB);

    if (connection) {
      console.log(`Connected to DB: ${connection.host}`);
    }
  } catch (error) {
    console.log(error, "Error in DB Connection");
  }
};

export default connectToDb;
