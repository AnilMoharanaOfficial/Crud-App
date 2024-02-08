import Course from "../model/courseModel.js";

const createCourse = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      res.status(400).json({
        success: false,
        message: "All Fields are Required",
      });
    }

    const course = await Course.create({
      title,
      description,
      category,
    });

    await course.save();

    // Success Message
    res.status(200).json({
      success: true,
      message: "Course Created Successfully",
      course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// Get Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      success: true,
      message: "All Courses",
      courses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

//Update Course
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndUpdate(
      id,
      { $set: req.body },
      { runValidators: true }
    );

    if (!course) {
      res.status(400).json({
        success: false,
        message: "Course with given Id dose not exist",
      });
    }

    // Success Status
    res.status(200).json({
      success: true,
      message: "Course Updated successfully",
      course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// Delete Course
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findByIdAndDelete(id, {
      $set: req.body,
    });

    if (!course) {
      res.status(400).json({
        success: false,
        message: "Course with given Id dose not exist",
      });
    }

    // await course.deleteOne();

    // Success Status
    res.status(200).json({
      success: true,
      message: "Course Deleted successfully",
      course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

export { createCourse, getCourses, updateCourse, deleteCourse };
