import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import AuthUsuarioService from '@modules/usuario/services/AuthUsuario/AuthUsuarioService'

export default class AuthUsuarioController {
  async show (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const service = container.resolve(AuthUsuarioService)

    const { user, token } = await service.execute({ email, password })

    return response.json({ user: classToClass(user), token })
  }
}
