const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController.js");

const categoryController = new CategoryController();

const router = Router();

router
  .get("/categories", (req, res) => categoryController.getAll(req, res))
  .get("/categories/:id", (req, res) => categoryController.getOne(req, res))
  .post("/categories", (req, res) => categoryController.createOne(req, res))
  .put("/categories/:id", (req, res) => categoryController.updateOne(req, res))
  .delete("/categories/:id", (req, res) =>
    categoryController.deleteOne(req, res)
  );

module.exports = router;
