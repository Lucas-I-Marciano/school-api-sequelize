const { Router } = require("express");
const CourseController = require("../controllers/CourseController.js");

const courseController = new CourseController();

const router = Router();

router
  .get("/courses", (req, res) => courseController.getFilteredCourses(req, res))
  .get("/courses/:id", (req, res) => courseController.getOne(req, res))
  .post("/courses", (req, res) => courseController.createOne(req, res))
  .put("/courses/:id", (req, res) => courseController.updateOne(req, res))
  .delete("/courses/:id", (req, res) => courseController.deleteOne(req, res));

module.exports = router;
