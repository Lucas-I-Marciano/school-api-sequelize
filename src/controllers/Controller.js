class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async createOne(req, res, registerReceived = {}) {
    console.log(
      Boolean(Boolean(registerReceived == {}) | Boolean(registerReceived))
    );
    // In order to become more flexible what data I will insert on my database
    // As an example, Enrollment, I will get student_id from params and construct my object in a specific method of Enrollment controller
    const registerToAdd =
      (registerReceived != {}) | Boolean(registerReceived)
        ? registerReceived
        : req.body;
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

  async getFirst(req, res) {
    try {
      const objectWhere = { ...req.params };
      const firstData = await this.serviceEntity.getFirstRegister(
        converIdHelper(objectWhere)
      );
      res.status(200).json({
        message: "Successfil!",
        data: firstData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getAllScoped(req, res, scope) {
    try {
      const finalScope = Boolean(scope) ? scope : "defaultScope";
      const dataList = await this.serviceEntity.getScopedData(finalScope);
      return res.status(200).json({
        message: "Successful!",
        data: dataList,
      });
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
