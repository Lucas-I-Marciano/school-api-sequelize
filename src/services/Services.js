const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllData() {
    // return dataSource[this.model].findAll();
    return dataSource.Person.findAll();
  }
}

module.exports = Services;
