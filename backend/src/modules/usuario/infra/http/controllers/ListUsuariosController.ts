import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListUsuariosService from '@modules/usuario/services/ListUsuarios/ListUsuariosService'

export default class ListUsuariosController {
  async index (request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListUsuariosService)

    const listUsuarios = await service.execute()

    return response.json(classToClass(listUsuarios))
  }
}
