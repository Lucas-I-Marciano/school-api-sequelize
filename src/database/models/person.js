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
      Person.hasMany(models.Enrollment, {
        foreignKey: "student_id",
        as: "enrollmentClasses",
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: "student_id",
        scope: { status: "registered" },
        as: "registeredClasses",
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: "student_id",
        scope: { status: "canceled" },
        as: "canceledClasses",
      });
    }
  }
  Person.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      tax_id: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Person",
      tableName: "persons",
      paranoid: true,
      defaultScope: {
        where: {
          active: true, //It will only run if I created 'active' column on my tables (in this case, by migrations)
        },
      },
      scopes: {
        allData: {
          where: {},
        },
      },
    }
  );
  return Person;
};
