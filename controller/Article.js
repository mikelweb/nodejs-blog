const prueba = (req, res) => {
    return res.status(200).json({
        mensaje:"Mensaje de prueba"
    })

}

module.exports = {
    prueba
}