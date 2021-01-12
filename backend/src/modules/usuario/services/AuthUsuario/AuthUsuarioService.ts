import { inject, injectable } from 'tsyringe'
import { sign } from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import AppError from '@shared/errors/AppError'

import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'
import IUsuarioRepository from '@modules/usuario/repositories/interfaces/IUsuarioRepository'

interface Request{
  email: string
  password: string
}

interface Response {
  user: Usuario,
  token: string
}

@injectable()
export default class AuthUsuarioService {
  constructor (
    @inject('UsuarioRepository')
    private repository: IUsuarioRepository
  ) {}

  async execute ({ email, password }: Request): Promise<Response> {
    const getUser = await this.repository.findByEmail({ email })

    if (!getUser) throw new AppError('Combination user/password is wrong', 401)

    const isValidPassword = await bcrypt.compare(password, getUser.password)

    if (!isValidPassword) throw new AppError('Combination user/password is wrong', 401)

    const token = sign(
      { id: getUser.usuario_id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    )

    return { user: getUser, token }
  }
}
