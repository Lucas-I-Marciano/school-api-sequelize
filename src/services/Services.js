const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllData() {
    return dataSource[this.model].findAll();
  }

  async getOneRegister(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRegister(register) {
    return dataSource[this.model].create(register);
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = Services;
