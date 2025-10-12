const express = require("express");
const router = express.Router();

const ArticleController = require("../controller/Article")

router.get("/ruta-de-prueba", ArticleController.prueba)
router.get("/cursos", ArticleController.cursos)

module.exports = router;