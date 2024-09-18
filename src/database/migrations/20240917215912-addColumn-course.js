"use strict";
/** @type {import('sequelize-cli').Migration} */
const { Sequelize, DataTypes } = require("sequelize"); // I must provide DataTypes to create deleteAt as DATE type
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("courses", "deletedAt", {
      type: DataTypes.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("courses");
  },
};
