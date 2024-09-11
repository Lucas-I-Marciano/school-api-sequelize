const Services = require("./Services.js");

class PersonServices extends Services {
  constructor() {
    super("Person");
  }

  async getEnrollmentsByStudent(id) {
    const student = await super.getOneRegister(id);

    const enrollmentList = await student.getRegisteredClass;
    return enrollmentList;
  }
}

module.exports = PersonServices;
