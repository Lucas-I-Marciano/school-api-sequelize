const { Router } = require("express");
const PersonController = require("../controllers/PersonController.js");
const EnrollmentController = require("../controllers/EnrollmentController.js");

const personController = new PersonController();
const enrollmentController = new EnrollmentController();

const router = Router();

router
  .get("/persons", (req, res) => personController.getAll(req, res))
  .get("/persons/:id", (req, res) => personController.getOne(req, res))
  .post("/persons", (req, res) => personController.createOne(req, res))
  .put("/persons/:id", (req, res) => personController.updateOne(req, res))
  .delete("/persons/:id", (req, res) => personController.deleteOne(req, res))
  .get("/persons/:studentId/enrollments", (req, res) =>
    personController.getEnrollments(req, res)
  )
  .post("/persons/:studentId/enrollments", (req, res) =>
    enrollmentController.createEnroll(req, res)
  );

module.exports = router;
