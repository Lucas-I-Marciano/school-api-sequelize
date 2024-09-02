const { Router } = requite("express");
const PersonController = require("../controllers/PersonController.js");

const router = Router();

router.get("/persons", PersonController.getAll);

module.exports = router;
