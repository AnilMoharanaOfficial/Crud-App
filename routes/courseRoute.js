import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from "../controller/courseController.js";

const courseRote = Router();

courseRote.post("/create", createCourse);
courseRote.get("/", getCourses);

courseRote.route("/:id").put(updateCourse).delete(deleteCourse);
export default courseRote;
