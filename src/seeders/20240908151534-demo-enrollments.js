"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "enrollments",
      [
        {
          student_id: 1,
          course_id: 1,
          status: "registered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 2,
          course_id: 2,
          status: "registered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 3,
          course_id: 3,
          status: "registered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 4,
          course_id: 4,
          status: "registered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
