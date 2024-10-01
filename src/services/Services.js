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
    try {
      return dataSource.sequelize.transaction(async (t) => {
        return dataSource[this.model].scope(scope).findAll({
          where: { ...objectWhere },
          transaction: t,
        });
      });
    } catch (error) {
      console.error("FAILED!");
    }
  }

  async updateRegister(
    updatedData,
    whereObject,
    scope = "defaultScope",
    t = {}
  ) {
    try {
      const listRegisterUpdated = await dataSource[this.model]
        .scope(scope) // Important if I need to reactive persons or change any other status from defaultScope
        .update(updatedData, {
          where: { ...whereObject },
          transaction: t, // Another option from update method
        });

      return listRegisterUpdated[0] === 0 ? false : true;
    } catch (erro) {
      console.error("FAILED!");
    }
  }

  async deleteRegister(whereObject) {
    return dataSource[this.model].destroy({
      where: { ...whereObject },
    });
  }
}

module.exports = Services;
