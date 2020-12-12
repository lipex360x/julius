import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'
import IUsuarioRepository from '@modules/usuario/repositories/interfaces/IUsuarioRepository'

interface Request{
  usuario_id: string
}

@injectable()
export default class ShowUsuarioService {
  constructor (
    @inject('UsuarioRepository')
    private repository: IUsuarioRepository
  ) {}

  async execute ({ usuario_id }: Request): Promise<Usuario> {
    const getUsuario = await this.repository.findById({ usuario_id })

    if (!getUsuario) throw new AppError('This user does not exists')

    return getUsuario
  }
}
