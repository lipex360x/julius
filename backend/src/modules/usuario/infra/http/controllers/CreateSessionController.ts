import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateSessionService from '@modules/usuario/services/CreateSession/CreateSessionService'

export default class CreateSessionController {
  async show (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const service = container.resolve(CreateSessionService)

    const { user, token } = await service.execute({ email, password })

    return response.json({ user: classToClass(user), token })
  }
}
