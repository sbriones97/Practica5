const express = require('express')
const autoresController = require('../controllers/autores')


const router = express.Router()

router.get('/autores', (req, res) => {
    autoresController(res)
})

module.exports = router