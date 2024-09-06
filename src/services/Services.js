const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async createRegister(register) {
    return dataSource[this.model].create(register);
  }

  async getOneRegister(id) {
    return dataSource[this.model].findByPk(id);
  }

  async getAllData() {
    return dataSource[this.model].findAll();
  }

  async updateRegister(updatedData, id) {
    const listRegisterUpdated = dataSource[this.model].update(updatedData, {
      where: {
        id: id,
      },
    });
    return listRegisterUpdated[0] === 0 ? false : true;
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
