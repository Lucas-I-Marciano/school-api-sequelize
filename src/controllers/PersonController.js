const Controller = require("./Controller.js");
const PersonServices = require("../services/PersonServices.js");
const EnrollmentServices = require("../services/EnrollmentServices.js");
const converIdHelper = require("../utils/convertIdHelper.js");
const dataSource = require("../database/models");

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
    this.enrollmentServices = new EnrollmentServices(); // Allowing me to work with enrollmentServices, as I can instance manually (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
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

  async getRegisterEnrollment(req, res) {
    try {
      const { studentId } = req.params;
      const registeredEnrollmentList =
        await personServices.getRegisteredEnrollmentByStudent(studentId);
      return res.status(200).json({
        message: "Successful!",
        data: registeredEnrollmentList,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getCanceledEnrollment(req, res) {
    try {
      const { studentId } = req.params;

      const canceledEnrollmentList =
        await personServices.getCanceledEnrollmentByStudent(Number(studentId));
      return res.status(200).json({
        message: "Successful!",
        data: canceledEnrollmentList,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getSpecificEnrollment(req, res) {
    const objectWhere = { ...req.params };
    const treatedObjectWhere = { ...converIdHelper(objectWhere) };
    const result = await personServices.getOneEnrollment(treatedObjectWhere);
    return res.status(200).json(result);
  }

  async inactivatePerson(req, res) {
    const { id } = req.params;
    try {
      return dataSource.sequelize.transaction(async (t) => {
        const personDeactivated = await personServices.updateRegister(
          { active: false },
          { id: id },
          "allData",
          t
        );
        const enrollmentCanceled = await this.enrollmentServices.updateRegister(
          { status: "canceled" },
          { student_id: id },
          "defaultScope",
          t
        );
        if (enrollmentCanceled && personDeactivated) {
          return res.status(200).json({ message: "Successful updated!" });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed!" });
    }
  }
}

module.exports = PersonController;
