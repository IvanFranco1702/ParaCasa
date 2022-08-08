const { Router } = require("express")
const { check } = require("express-validator")
const router = Router()
const { getEventos, crearEventos, actualizarEventos, borrarEventos } = require("../controllers/events")
const { isDate } = require("../helpers/isDate")
const { validarCampos } = require("../middlewares/validar-campos")
const { validarJWT } = require("../middlewares/validar-jwt")




router.use(validarJWT)


router.get('/'
, getEventos)


router.post('/', [
    check('title', ' el title es obligatiorio').not().isEmpty(),
    check('start','fecha de inicio es obligatoria').custom(isDate),
    check('end','fecha de finalizacion es obligatoria').custom(isDate ),
            validarCampos

] ,crearEventos )


router.put('/:id', [
    check('title', ' el title es obligatiorio').not().isEmpty(),
    check('start','fecha de inicio es obligatoria').custom(isDate),
    check('end','fecha de finalizacion es obligatoria').custom(isDate ),
            validarCampos

] , actualizarEventos)


router.delete('/:id',  borrarEventos)


module.exports= router 




