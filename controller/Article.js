const validator = require("validator");
const Article = require("../model/Article")

const prueba = (req, res) => {
    return res.status(200).json({
        mensaje:"Mensaje de prueba"
    })
}

const cursos = (req, res) => {
    console.log("Se ha ejecutado el endpoint /cursos");

    return res.status(200).json(
        [
            {
                "nombre":"Python",
                "horas":25,
                "dificultad":"media"
            },
            {
                "nombre":"NodeJS",
                "horas":40,
                "dificultad":"media"
            }
        ]
    );
}

const createArticle = (req, res) => {

    // Post params
    let params = req.body;

    try {

        let validarTitulo = !validator.isEmpty(params.title) && validator.isLength(params.title, {min: 3, max: undefined});
        let validarContenido = !validator.isEmpty(params.content);

        if(!validarTitulo || !validarContenido) {
            throw new Error("No se ha validad la información");
        }
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
module.exports = {
    prueba,
    cursos,
    createArticle,
    getArticles,
    getArticle,
}