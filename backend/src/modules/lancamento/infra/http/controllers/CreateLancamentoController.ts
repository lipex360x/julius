import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateLancamentoService from '@modules/lancamento/services/CreateLancamento/CreateLancamentoService'

export default class CreateLancamentoController {
  async create (request: Request, response: Response): Promise<Response> {
    const { usuario_id, descricao, data, valor } = request.body

    const service = container.resolve(CreateLancamentoService)

    const createLancamento = await service.execute({ usuario_id, descricao, data, valor })

    return response.json(classToClass(createLancamento))
  }
}
