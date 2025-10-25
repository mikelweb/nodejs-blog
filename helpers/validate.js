const validator = require("validator");

const validateArticle = (params) => {
    let validarTitulo = !validator.isEmpty(params.title) && validator.isLength(params.title, {min: 3, max: undefined});
    let validarContenido = !validator.isEmpty(params.content);

    if(!validarTitulo || !validarContenido) {
        throw new Error("No se ha validad la información");
    }
}
