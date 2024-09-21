const Controller = require("./Controller.js");
const EnrollmentServices = require("../services/EnrollmentServices.js");

const enrollmentServices = new EnrollmentServices();

class EnrollmentController extends Controller {
  constructor() {
    super(enrollmentServices);
  }

  async createEnroll(req, res) {
    const { studentId } = req.params;
    const { status, course_id } = req.body;
    const registerToAdd = {
      status,
      course_id,
      student_id: studentId,
    };
    super.createOne(req, res, registerToAdd);
  }
}

module.exports = EnrollmentController;
