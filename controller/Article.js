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
module.exports = {
    prueba,
    cursos
}