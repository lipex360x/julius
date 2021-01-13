import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import authMiddleware from '../middlewares/authMiddleware'

import CreateSessionController from '../controllers/CreateSessionController'
import CreateUsuarioController from '../controllers/CreateUsuarioController'
import ListUsuariosController from '../controllers/ListUsuariosController'
import ShowUsuarioController from '../controllers/ShowUsuarioController'

const router = Router()

const createSessionController = new CreateSessionController()
const createUsuarioController = new CreateUsuarioController()
const listUsuariosController = new ListUsuariosController()
const showUsuarioController = new ShowUsuarioController()

router.post('/', celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
}), createUsuarioController.create)

router.post('/auth', celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
}), createSessionController.show)

router.get('/', listUsuariosController.index)

router.use(authMiddleware)

router.get('/show', showUsuarioController.show)

export default router
