import { Router } from 'express'

import CreateUsuarioController from '../controllers/CreateUsuarioController'
import ListUsuariosController from '../controllers/ListUsuariosController'
import ShowUsuarioController from '../controllers/ShowUsuarioController'

const router = Router()

const createUsuarioController = new CreateUsuarioController()
const listUsuariosController = new ListUsuariosController()
const showUsuarioController = new ShowUsuarioController()

router.post('/', createUsuarioController.create)
router.get('/', listUsuariosController.index)
router.get('/:usuario_id', showUsuarioController.show)

export default router
