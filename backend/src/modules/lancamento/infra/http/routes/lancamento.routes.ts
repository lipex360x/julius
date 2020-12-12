import { Router } from 'express'

import CreateLancamentoController from '../controllers/CreateLancamentoController'

const router = Router()

const createLancamentoController = new CreateLancamentoController()

router.post('/', createLancamentoController.create)

export default router
