const Controller = require("./Controller.js");
const EnrollmentServices = require("../services/EnrollmentServices.js");

const enrollmentServices = new EnrollmentServices();

class EnrollmentController extends Controller {
  constructor() {
    super(enrollmentServices);
  }

  async createEnroll(req, res) {
    const { studentId } = req.params;
    const registerToAdd = {
      ...req.body,
      student_id: Number(studentId),
    };
    super.createOne(req, res, registerToAdd);
  }
}

module.exports = EnrollmentController;
