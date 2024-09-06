class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async createOne(req, res) {
    const registerToAdd = req.body;
    try {
      const addedRegister = await this.serviceEntity.createRegister(
        registerToAdd
      );
      return res.status(200).json({
        message: "Successful created!",
        data: addedRegister,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const consulted = await this.serviceEntity.getOneRegister(Number(id));
      return res.status(200).json({
        message: "Successful!",
        data: consulted,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const dataList = await this.serviceEntity.getAllData();
      return res.status(200).json(dataList);
    } catch (erro) {
      console.error(erro);
    }
  }

  async updateOne(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const isUpdated = await this.serviceEntity.updateRegister(
        updatedData,
        Number(id)
      );
      if (!isUpdated) {
        return res.status(400).json({ message: "Failed!" });
      }
      return res.status(200).json({ message: "Successful updated!" });
    } catch (erro) {
      console.error(erro);
    }
  }

  async deleteOne(req, res) {
    try {
      const { id } = req.params;
      const deleting = await this.serviceEntity.deleteRegister(Number(id));
      return res.status(200).json({
        message: "Successful deleted!",
        id_deleted: id,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;
