import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ShowUsuarioService from '@modules/usuario/services/ShowUsuario/ShowUsuarioService'

export default class ShowUsuarioController {
  async show (request: Request, response: Response): Promise<Response> {
    const { usuario_id } = request.params

    const service = container.resolve(ShowUsuarioService)

    const showUsuario = await service.execute({ usuario_id })

    return response.json(classToClass(showUsuario))
  }
}
