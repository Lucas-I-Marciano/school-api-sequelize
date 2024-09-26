const dataSource = require("../database/models");

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

  async getFirstRegister(objectWhere) {
    return dataSource[this.model].findOne({ where: { ...objectWhere } }); // As I will give where framework, 'objectWhere could be just an object with what columns I want to filter
  }

  async countRegisters(options = {}) {
    return dataSource[this.model].findAndCountAll(options);
  }

  async getScopedData(scope, objectWhere = {}) {
    return dataSource[this.model].scope(scope).findAll({
      where: { ...objectWhere },
    });
  }

  async updateRegister(updatedData, whereObject) {
    const listRegisterUpdated = dataSource[this.model].update(updatedData, {
      where: { ...whereObject },
    });
    return listRegisterUpdated[0] === 0 ? false : true;
  }

  async deleteRegister(whereObject) {
    return dataSource[this.model].destroy({
      where: { ...whereObject },
    });
  }
}

module.exports = Services;
