const express = require('express')
const operacionesController = require('../controllers/operaciones')


const router = express.Router()

router.post('/suma', (req, res) => {
    operacionesController(req ,res, 'suma')
})

router.post('/resta', (req, res) => {
    operacionesController(req ,res, 'resta')
})

router.post('/multiplica', (req, res) => {
    operacionesController(req ,res, 'multiplica')
})

router.post('/divide', (req, res) => {
    operacionesController(req ,res, 'divide')
})

router.post('/free', (req, res) => {
    operacionesController(req ,res, 'free')
})

module.exports = router