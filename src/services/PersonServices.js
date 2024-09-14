const Services = require("./Services.js");

class PersonServices extends Services {
  constructor() {
    super("Person");
  }

  async getEnrollmentsByStudent(id) {
    const student = await super.getOneRegister(id);

    const enrollmentList = await student.getEnrollmentClass();
    return enrollmentList;
  }

  async getRegisteredEnrollmentByStudent(id) {
    const student = await super.getOneRegister(id);

    const registeredEnrollmentList = await student.getRegisteredClass();
    return registeredEnrollmentList;
  }

  async getCanceledEnrollmentByStudent(id) {
    const student = await super.getOneRegister(id);

    const canceledEnrollmentList = await student.getCanceledClass();
    return canceledEnrollmentList;
  }
}

module.exports = PersonServices;
