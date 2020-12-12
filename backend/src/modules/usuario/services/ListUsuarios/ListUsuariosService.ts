import { inject, injectable } from 'tsyringe'

import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'
import IUsuarioRepository from '@modules/usuario/repositories/interfaces/IUsuarioRepository'

@injectable()
export default class ListUsuariosService {
  constructor (
    @inject('UsuarioRepository')
    private repository: IUsuarioRepository
  ) {}

  async execute (): Promise<Usuario[]> {
    const getUsuarios = await this.repository.findAll()

    return getUsuarios
  }
}
