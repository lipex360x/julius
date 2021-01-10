import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import CreateLancamentoController from '../controllers/CreateLancamentoController'
import ListLancamentosController from '../controllers/ListLancamentosController'
import DeleteLancamentoController from '../controllers/DeleteLancamentoController'

const router = Router()

const createLancamentoController = new CreateLancamentoController()
const listLancamentosController = new ListLancamentosController()
const deleteLancamentoController = new DeleteLancamentoController()

router.post('/', celebrate({
  [Segments.BODY]: {
    usuario_id: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required(),
    value: Joi.number().required()
  }
}), createLancamentoController.create)

router.get('/:usuario_id', listLancamentosController.index)

router.delete('/:lancamento_id', deleteLancamentoController.delete)

export default router
