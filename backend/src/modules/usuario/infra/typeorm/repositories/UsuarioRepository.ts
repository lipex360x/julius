import { Repository, getRepository } from 'typeorm'

import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'
import IUsuarioRepository, { CreateProps, FindByIdProps } from '@modules/usuario/repositories/interfaces/IUsuarioRepository'

export default class UsuarioRepository implements IUsuarioRepository {
  private repository: Repository<Usuario>

  constructor () {
    this.repository = getRepository(Usuario)
  }

  async create ({ nome, email }:CreateProps): Promise<Usuario> {
    const usuario = this.repository.create({ nome, email })

    await this.repository.save(usuario)

    return usuario
  }

  async findById ({ email }:FindByIdProps): Promise<Usuario> {
    const getUsuario = await this.repository.findOne({
      where: {
        email
      }
    })

    return getUsuario
  }
}
