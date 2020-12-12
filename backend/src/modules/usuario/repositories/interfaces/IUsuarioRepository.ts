import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'

export interface CreateProps {
  nome: string,
  email: string
}

export interface FindByIdProps {
  usuario_id: string
}

export interface FindByEmailProps {
  email: string
}

export default interface IUsuarioRepository {
  create(data: CreateProps): Promise<Usuario>
  findById(data: FindByIdProps): Promise<Usuario>
  findByEmail(data: FindByEmailProps): Promise<Usuario>
  findAll(): Promise<Usuario[]>
}
