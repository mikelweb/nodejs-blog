const express = require("express");
const multer = require("multer");
const ArticleController = require("../controller/Article")

const router = express.Router();


router.get("/ruta-de-prueba", ArticleController.prueba);
router.get("/cursos", ArticleController.cursos);
router.post("/crear", ArticleController.createArticle);
router.get("/articulos", ArticleController.getArticles);
router.get("/articulo/:id", ArticleController.getArticle);
router.delete("/articulo/:id", ArticleController.deleteArticle);
router.put("/articulo/:id", ArticleController.updateArticle);
router.post("/upload-img/:id", [uploader.single("imgFile")], ArticleController.uploadFileToArticle);

module.exports = router;