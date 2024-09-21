"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          title: "API with Express",
          description: "API course with Express and MongoDB",
          start_date: "2023-01-01",
          category_id: 1,
          instructor_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "SpringBoot",
          description: "Java course with Spring Framework",
          start_date: "2023-01-01",
          category_id: 2,
          instructor_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Python Web with Django",
          description: "Web applications course with Django",
          start_date: "2023-01-01",
          category_id: 3,
          instructor_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Object orientation with C#",
          description: "C# course: collections, files and libs",
          start_date: "2023-01-01",
          category_id: 4,
          instructor_id: 6,
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
