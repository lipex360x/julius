import { v4 as uuid } from 'uuid'

import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'
import IUsuarioRepository, { CreateProps, FindByIdProps, FindByEmailProps } from '../interfaces/IUsuarioRepository'

export default class FakeUsuarioRepository implements IUsuarioRepository {
  private repository: Usuario[] = []

  async create ({ nome, email, senha }:CreateProps): Promise<Usuario> {
    const usuario = new Usuario()

    Object.assign(usuario, {
      usuario_id: uuid(),
      nome,
      email,
      senha,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(usuario)

    return usuario
  }

  async findById ({ usuario_id }:FindByIdProps): Promise<Usuario> {
    const getUsuario = this.repository.find(usuario => usuario.usuario_id === usuario_id)

    return getUsuario
  }

  async findByEmail ({ email }:FindByEmailProps): Promise<Usuario> {
    const getUsuario = this.repository.find(usuario => usuario.email === email)

    return getUsuario
  }

  async findAll (): Promise<Usuario[]> {
    return this.repository
  }
}
