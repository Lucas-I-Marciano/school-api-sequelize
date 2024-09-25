const Controller = require("./Controller.js");
const CourseServices = require("../services/CourseServices.js");
const { Op } = require("sequelize");

const courseServices = new CourseServices();

class CourseController extends Controller {
  constructor() {
    super(courseServices);
  }

  async getFilteredCourses(req, res) {
    try {
      const queryParam = req.query;

      const objectWhere =
        Object.keys(queryParam).length === 0 ? null : { start_date: {} };

      queryParam["initial_date"]
        ? (objectWhere["start_date"][Op.gte] = queryParam["initial_date"])
        : null;
      queryParam["end_date"]
        ? (objectWhere["start_date"][Op.lte] = queryParam["end_date"])
        : null;

      const coursesList = await courseServices.getScopedData(
        "defaultScope",
        objectWhere
      );
      console.log();
      res.status(200).json(coursesList);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CourseController;
