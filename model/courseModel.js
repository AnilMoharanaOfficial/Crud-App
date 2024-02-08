import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [8, "Title must be at least 8 characters"],
      maxlength: [60, "Title should be less than 60 characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [50, "Description must be at least 50 characters"],
      maxlength: [200, "Description should be less than 200 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", courseSchema);

export default Course;
