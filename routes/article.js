const express = require("express");
const router = express.Router();

const ArticleController = require("../controller/Article")

router.get("/ruta-de-prueba", ArticleController.prueba)

module.exports = router;