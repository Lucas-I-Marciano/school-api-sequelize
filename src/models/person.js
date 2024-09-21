"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.hasMany(models.Course, { foreignKey: "instructor_id" });
      Person.hasMany(models.Enrollment, { foreignKey: "student_id" });
    }
  }
  Person.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: {
            args: true,
            msg: "Please provide a valid name",
          },
          len: {
            args: [3, 40],
            msg: "Please provide a valid name",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Please provide a valid e-mail",
          },
        },
      },
      tax_id: DataTypes.STRING,
      active: {
        type: DataTypes.BOOLEAN,
        validate: {
          isIn: {
            args: [[0, 1]],
            msg: "active field must be either 0 (inactive) or 1 (active)",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["instructor", "student"]],
            msg: "role field must be either 'instructor' or 'student'",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Person",
      tableName: "persons",
    }
  );
  return Person;
};
