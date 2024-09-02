"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "persons",
      [
        {
          name: "Solange Estudante",
          email: "solange@email.com",
          tax_id: "63058133022",
          active: true,
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Igor Estudante",
          email: "igor@email.com",
          tax_id: "99018205028",
          active: true,
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aline Estudante",
          email: "aline@email.com",
          tax_id: "92797497066",
          active: true,
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fernando Estudante",
          email: "fernando@email.com",
          tax_id: "17195730000",
          active: true,
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ricardo Docente",
          email: "ricardo@email.com",
          tax_id: "06946507061",
          active: true,
          role: "instructor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dine Docente",
          email: "dine@email.com",
          tax_id: "80941142078",
          active: true,
          role: "instructor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("persons", null, {});
  },
};
