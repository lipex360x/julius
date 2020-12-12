import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import CreateLancamentoController from '../controllers/CreateLancamentoController'

const router = Router()

const createLancamentoController = new CreateLancamentoController()

router.post('/', celebrate({
  [Segments.BODY]: {
    usuario_id: Joi.string().required(),
    descricao: Joi.string().required(),
    data: Joi.date().required(),
    valor: Joi.number().required()
  }
}), createLancamentoController.create)

export default router
