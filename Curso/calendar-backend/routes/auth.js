const express = require('express')
const { crearUsuario, loginUsuario, revalidarUsuario } = require('../controllers/auth')
const router = express.Router


router.post('/new',crearUsuario)


router.post('/',loginUsuario)
router.get('/renew',revalidarUsuario)

module.exports= router