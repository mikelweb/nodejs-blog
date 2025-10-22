const express = require("express");
const router = express.Router();

const ArticleController = require("../controller/Article")

router.get("/ruta-de-prueba", ArticleController.prueba);
router.get("/cursos", ArticleController.cursos);
router.post("/crear", ArticleController.createArticle);
router.get("/articulos", ArticleController.getArticles);
router.get("/articulo/:id", ArticleController.getArticle);
router.delete("/articulo/:id", ArticleController.deleteArticle);
router.put("/articulo/:id", ArticleController.updateArticle);

module.exports = router;