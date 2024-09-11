const Controller = require("./Controller.js");
const PersonServices = require("../services/PersonServices.js");

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getEnrollments(req, res) {
    try {
      const { studentId } = req.params;
      const enrollmentList = await personServices.getEnrollmentsByStudent(
        Number(studentId)
      );
      return res.status(200).json({
        message: "Successful!",
        data: enrollmentList,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PersonController;
