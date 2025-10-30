const Article = require("../model/Article")
const { validateArticle } = require("../helpers/validate")

const createArticle = (req, res) => {

    // Post params
    let params = req.body;

    try {
        validateArticle(params);
    } catch {
        return res.status(400).json({
            status: "error",
            mensaje: "faltan datos por enviar"
        });
    }

    const article = new Article(params);

    article.save()
        .then(item => {
            console.log("Guardado")
            return res.status(200).json({
                status: "saved",
                mensaje: "Guardado"
            });
        })?.catch(Error => {
            return res.status(400).json({
                status: "error",
                mensaje: "No guardado"
            });
        });
}

const getArticles = (req, res) => {
    let query = Article.find();
    
    // if(req.params.limit) {
    //     query.limit(3);
    // }
    
    query.exec()
        .then(result => {
            // console.log(result);

            return res.status(200).send({
                status: "success",
                articles: result
            });
        })
        .catch(error => {
            console.log(error);

            return res.status(404).json({
                status: "error",
                mensaje: "No se han encontrado artículos"
            });
        });
}

const getArticle = (req, res) => {

    let id = req.params.id;

    if(!id) {
        return res.status(404).json({
            status: "error",
            mensaje: "No se han proporcionado id del artículo"
        });
    }

    let query = Article.findById(id);
    
    query.exec()
        .then(result => {
            // console.log(result);

            return res.status(200).send({
                status: "success",
                article: result
            });
        })
        .catch(error => {
            console.log(error);

            return res.status(500).json({
                status: "error",
                mensaje: "Error al obtener el artículo"
            });
        });
}

const deleteArticle = (req, res) => {

    let id = req.params.id;

    if(!id) {
        return res.status(404).json({
            status: "error",
            mensaje: "No se han proporcionado id del artículo"
        });
    }

    let query = Article.findOneAndDelete({_id:id});
    
    query.exec()
        .then(result => {
            // console.log(result);
            if(!result) {
                return res.status(500).send({
                    status: "error",
                    mensaje: "No se ha encontrado el artículo"
                });                    
            }
            return res.status(200).send({
                status: "success",
                article: result
            });
        })
        .catch(error => {
            console.log(error);

            return res.status(500).json({
                status: "error",
                mensaje: "No se ha encontrado el artículo"
            });
        });
}

const updateArticle = (req, res) => {

    // URL param
    let id = req.params.id;
    
    // POST body params
    let params = req.body;

    // Validate params
    if(!id) {
        return res.status(404).json({
            status: "error",
            mensaje: "No se ha proporcionado id del artículo"
        });
    }

    try {
        validateArticle(params);
    } catch {
        return res.status(400).json({
            status: "error",
            mensaje: "faltan datos por enviar"
        });
    }

    let query = Article.findOneAndUpdate({_id:id}, params);
    
    query.exec()
        .then(result => {
            // console.log(result);
            if(!result) {
                return res.status(500).send({
                    status: "error",
                    mensaje: "No se ha encontrado el artículo"
                });                    
            }
            return res.status(200).send({
                status: "success",
                article: result
            });
        })
        .catch(error => {
            console.log(error);

            return res.status(500).json({
                status: "error",
                mensaje: "No se ha encontrado el artículo"
            });
        });
}

module.exports = {
    createArticle,
    getArticles,
    getArticle,
    deleteArticle,
    updateArticle
}