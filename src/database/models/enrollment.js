"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollment.belongsTo(models.Person, { foreignKey: "student_id" });
      Enrollment.belongsTo(models.Course, { foreignKey: "course_id" });
    }
  }
  Enrollment.init(
    {
      status: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["registered", "canceled"]], // I Must give a array inside another
            msg: "status field must be either 'registered' or 'canceled'",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Enrollment",
      tableName: "enrollments",
      paranoid: true,
    }
  );
  return Enrollment;
};
