const { Router } = require("express");
const PersonController = require("../controllers/PersonController.js");
const EnrollmentController = require("../controllers/EnrollmentController.js");

const personController = new PersonController();
const enrollmentController = new EnrollmentController();

const router = Router();

router
  .get("/persons", (req, res) => personController.getAllScoped(req, res))
  .get("/persons/all", (req, res) =>
    personController.getAllScoped(req, res, "allData")
  )
  .get("/persons/:id", (req, res) => personController.getOne(req, res))
  .post("/persons", (req, res) => personController.createOne(req, res))
  .put("/persons/:id", (req, res) => personController.updateOne(req, res))
  .put("/persons/:id/inactivate", (req, res) =>
    personController.inactivatePerson(req, res)
  )
  .delete("/persons/:id", (req, res) => personController.deleteOne(req, res))
  .get("/persons/:studentId/enrollments", (req, res) =>
    personController.getEnrollments(req, res)
  )
  .post("/persons/:studentId/enrollments", (req, res) =>
    enrollmentController.createEnroll(req, res)
  )
  .get("/persons/:studentId/enrollments/registered", (req, res) =>
    personController.getRegisterEnrollment(req, res)
  )
  .get("/persons/:studentId/enrollments/canceled", (req, res) =>
    personController.getCanceledEnrollment(req, res)
  )
  .get("/persons/:studentId/enrollments/count", (req, res) =>
    enrollmentController.countEnrollment(req, res)
  )
  .put("/persons/:studentId/enrollments/:enrollmentId/reactivate", (req, res) =>
    enrollmentController.reactiveEnrollment(req, res)
  )
  .get("/persons/:student_id/enrollments/:id", (req, res) =>
    personController.getSpecificEnrollment(req, res)
  )
  .put("/persons/:student_id/enrollments/:id", (req, res) =>
    enrollmentController.updateMany(req, res)
  )
  .delete("/persons/:student_id/enrollments/:id", (req, res) =>
    enrollmentController.deleteMany(req, res)
  );

module.exports = router;
