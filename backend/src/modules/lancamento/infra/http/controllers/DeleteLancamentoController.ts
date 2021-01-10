import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import DeleteLancamentoService from '@modules/lancamento/services/DeleteLancamento/DeleteLancamentoService'

export default class DeleteLancamentoController {
  async delete (request: Request, response: Response): Promise<Response> {
    const { lancamento_id } = request.params

    const service = container.resolve(DeleteLancamentoService)

    const serviceFunction = await service.execute({ lancamento_id })

    return response.json(classToClass(serviceFunction))
  }
}
