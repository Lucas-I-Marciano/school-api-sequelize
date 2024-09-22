const Services = require("./Services.js");
const EnrollmentServices = require("./EnrollmentServices.js");

const enrollmentServices = new EnrollmentServices();

class PersonServices extends Services {
  constructor() {
    super("Person");
  }

  async getEnrollmentsByStudent(id) {
    const student = await super.getOneRegister(id);

    const enrollmentList = await student.getEnrollmentClasses();
    return enrollmentList;
  }

  async getRegisteredEnrollmentByStudent(id) {
    const student = await super.getOneRegister(id);

    const registeredEnrollmentList = await student.getRegisteredClasses();
    return registeredEnrollmentList;
  }

  async getCanceledEnrollmentByStudent(id) {
    const student = await super.getOneRegister(id);
    const canceledEnrollmentList = await student.getCanceledClasses();
    return canceledEnrollmentList;
  }

  async getOneEnrollment(whereObject) {
    try {
      const result = await enrollmentServices.getFirstRegister(whereObject);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PersonServices;
