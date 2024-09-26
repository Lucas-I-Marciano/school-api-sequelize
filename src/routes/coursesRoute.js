const { Router } = require("express");
const CourseController = require("../controllers/CourseController.js");
const EnrollmentController = require("../controllers/EnrollmentController.js");

const courseController = new CourseController();
const enrollmentController = new EnrollmentController();

const router = Router();

router
  .get("/courses", (req, res) => courseController.getFilteredCourses(req, res))
  .get("/courses/enrollments/count", (req, res) =>
    enrollmentController.getEnrollmentCountByCourse(req, res)
  )
  .get("/courses/:id", (req, res) => courseController.getOne(req, res))
  .post("/courses", (req, res) => courseController.createOne(req, res))
  .put("/courses/:id", (req, res) => courseController.updateOne(req, res))
  .delete("/courses/:id", (req, res) => courseController.deleteOne(req, res));

module.exports = router;
