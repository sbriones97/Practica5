function operacionSuma(numeros){
    return numeros.reduce((a, b) => a + b, 0)
}
function operacionResta(restando, restadores){
    return restando - operacionSuma(restadores)
}
function operacionMultiplica(numeros){
    return numeros.reduce((a, b) => a * b, 1)
}
function operacionDivide(dividendo, divisores){
    return dividendo / operacionSuma(divisores)
}
function operacionFree(string_operacion){
    return eval(string_operacion)
}

module.exports = function (req, res, operacion) {
    resultado = 0
    json_req = req.body
    if(operacion == 'suma'){
        resultado = operacionSuma(json_req['nums'])
    }
    if(operacion == 'resta'){
        resultado = operacionResta(json_req['numToSubs'], json_req['nums'])
    }
    if(operacion == 'multiplica'){
        resultado = operacionMultiplica(json_req['nums'])
    }
    if(operacion == 'divide'){
        resultado = operacionDivide(json_req['numToDiv'], json_req['nums'])
    }
    if(operacion == 'free'){
        resultado = operacionFree(json_req['operation'])
    }

    respuesta = `{'respuesta': ${resultado}}`

    res.status(200).end(respuesta)

}