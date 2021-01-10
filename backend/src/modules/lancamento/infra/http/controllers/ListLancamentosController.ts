import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListLancamentos from '@modules/lancamento/services/ListLancamentos/ListLancamentosService'

export default class ListLancamentosController {
  async index (request: Request, response: Response): Promise<Response> {
    const { usuario_id } = request.params

    const service = container.resolve(ListLancamentos)

    const serviceFunction = await service.execute({ usuario_id })

    return response.json(classToClass(serviceFunction))
  }
}
