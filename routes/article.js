const express = require("express");
const multer = require("multer");
const ArticleController = require("../controller/Article")

const router = express.Router();

const myStorage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, "./files/img")
    },
    filename: function(req, file, cb) {
        cb(null, "article_" + Date.now() + "_" + file.originalname);
    }
});

router.post("/crear", ArticleController.createArticle);
router.get("/articulos", ArticleController.getArticles);
router.get("/articulo/:id", ArticleController.getArticle);
router.delete("/articulo/:id", ArticleController.deleteArticle);
router.put("/articulo/:id", ArticleController.updateArticle);
router.post("/upload-img/:id", [uploader.single("imgFile")], ArticleController.uploadFileToArticle);

module.exports = router;