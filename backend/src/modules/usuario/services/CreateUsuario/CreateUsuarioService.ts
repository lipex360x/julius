import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'
import IUsuarioRepository from '@modules/usuario/repositories/interfaces/IUsuarioRepository'

interface Request{
  nome: string,
  email: string,
}

@injectable()
export default class CreateUsuarioService {
  constructor (
    @inject('UsuarioRepository')
    private repository: IUsuarioRepository
  ) {}

  async execute ({ nome, email }: Request): Promise<Usuario> {
    const getUsuario = await this.repository.findById({ email })

    if (getUsuario) throw new AppError('This email already exists')

    const usuario = await this.repository.create({ nome, email })

    return usuario
  }
}
