import { Router } from 'express'

import CreateUsuarioController from '../controllers/CreateUsuarioController'
import ListUsuariosController from '../controllers/ListUsuariosController'

const router = Router()

const createUsuarioController = new CreateUsuarioController()
const listUsuariosController = new ListUsuariosController()

router.post('/', createUsuarioController.create)
router.get('/', listUsuariosController.index)

export default router
