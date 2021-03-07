
module.exports = function (res) {
    autor1 = "Salvador Briones"
    autor2 = "Victoria Villarreal"

    respuesta = `{'autor1': ${autor1}, 'autor2': ${autor2}}`

    res.status(200).end(respuesta)

}