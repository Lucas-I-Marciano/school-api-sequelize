class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const dataList = await this.serviceEntity.getAllData();
      return res.status(200).json(dataList);
    } catch (erro) {}
  }
}

module.exports = Controller;
