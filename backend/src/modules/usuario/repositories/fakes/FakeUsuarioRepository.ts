import { v4 as uuid } from 'uuid'

import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'
import IUsuarioRepository, { CreateProps, FindByIdProps } from '../interfaces/IUsuarioRepository'

export default class FakeUsuarioRepository implements IUsuarioRepository {
  private repository: Usuario[] = []

  async create ({ nome, email }:CreateProps): Promise<Usuario> {
    const usuario = new Usuario()

    Object.assign(usuario, {
      usuario_id: uuid(),
      nome,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(usuario)

    return usuario
  }

  async findById ({ email }:FindByIdProps): Promise<Usuario> {
    const getUsuario = this.repository.find(usuario => usuario.email === email)

    return getUsuario
  }
}
