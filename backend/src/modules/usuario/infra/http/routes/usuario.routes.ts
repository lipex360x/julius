import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import CreateUsuarioController from '../controllers/CreateUsuarioController'
import ListUsuariosController from '../controllers/ListUsuariosController'
import ShowUsuarioController from '../controllers/ShowUsuarioController'

const router = Router()

const createUsuarioController = new CreateUsuarioController()
const listUsuariosController = new ListUsuariosController()
const showUsuarioController = new ShowUsuarioController()

router.post('/', celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required()
  }
}), createUsuarioController.create)

router.get('/', listUsuariosController.index)

router.get('/:usuario_id', showUsuarioController.show)

export default router
