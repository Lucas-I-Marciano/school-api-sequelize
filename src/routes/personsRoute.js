const { Router } = require("express");
const PersonController = require("../controllers/PersonController.js");

const personController = new PersonController();

const router = Router();

router
  .get("/persons", (req, res) => personController.getAll(req, res))
  .get("/persons/:id", (req, res) => personController.getOne(req, res))
  .post("/persons", (req, res) => personController.createOne(req, res))
  .put("/persons/:id", (req, res) => personController.updateOne(req, res))
  .delete("/person/:id", (req, res) => personController.deleteOne(req, res));

module.exports = router;
