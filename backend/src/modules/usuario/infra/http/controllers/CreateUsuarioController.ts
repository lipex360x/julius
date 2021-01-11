import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateUsuarioService from '@modules/usuario/services/CreateUsuario/CreateUsuarioService'

export default class CreateUsuarioController {
  async create (request: Request, response: Response): Promise<Response> {
    const { nome, email, senha } = request.body

    const service = container.resolve(CreateUsuarioService)

    const createUsuario = await service.execute({ nome, email, senha })

    return response.json(classToClass(createUsuario))
  }
}
