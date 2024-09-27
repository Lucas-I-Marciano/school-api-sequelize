const Controller = require("./Controller.js");
const EnrollmentServices = require("../services/EnrollmentServices.js");
const { literal } = require("sequelize");

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

  async countEnrollment(req, res) {
    const { studentId } = req.params;
    const options = {
      where: {
        student_id: studentId,
        status: "registered",
      },
      order: [["id", "ASC"]],
    };
    const countAndList = await this.serviceEntity.countRegisters(options);
    return res.status(200).json({
      message: "Successful!",
      data: countAndList,
    });
  }

  async getEnrollmentCountByCourse(req, res) {
    try {
      const { max_enrollments } = req.query;
      const havingLiteral = max_enrollments
        ? `count(course_id)>=${max_enrollments}`
        : "";
      const options = {
        where: {
          status: "registered",
        },
        group: ["course_id"],
        having: literal(havingLiteral),
      };
      const countEnrollment = await this.serviceEntity.countRegisters(options);
      return res.status(200).json({
        message: "Successful!",
        data: countEnrollment.count,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async reactiveEnrollment(req, res) {
    const { studentId, enrollmentId } = req.params;
    const reactivatedEnrollment = await this.serviceEntity.updateRegister(
      { status: "registered" },
      {
        student_id: studentId,
        id: enrollmentId,
      }
    );
    if (reactivatedEnrollment) {
      res.status(200).json({
        message: `Successful reactivated! Student: ${studentId} - Enrollment ID: ${enrollmentId}`,
      });
    }
    console.log(reactivatedEnrollment);
  }
}

module.exports = EnrollmentController;
