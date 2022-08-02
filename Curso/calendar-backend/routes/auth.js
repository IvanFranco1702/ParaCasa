const express = require('express')
const {check}= require('express-validator')
const router = express.Router()

const { crearUsuario, loginUsuario, revalidarUsuario } = require('../controllers/auth')





router.post('/new',
    [check('name','el nombre es obligatorio').not().isEmpty(),
    check('email','el email es obligatorio').isEmail(),
    check('contraseña','la contraseña es obligatorio').isLength({min:5})
    ],
crearUsuario)


router.post('/',
    [
        check('email','ingrese un email valido').isEmail(),
        check('contraseña','la contraseña debe tener un largo minimo de 5 caracteres').isLength({min:5})
    ],
    loginUsuario)
router.get('/renew',revalidarUsuario)

module.exports= router