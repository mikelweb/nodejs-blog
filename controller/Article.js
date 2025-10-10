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

module.exports = {
    prueba,
    cursos
}