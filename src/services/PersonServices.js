const Services = require("./Services.js");

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
}

module.exports = PersonServices;
