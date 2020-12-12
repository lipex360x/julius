import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'

export interface CreateProps {
  nome: string,
  email: string
}

export interface FindByIdProps {
  email: string
}

export default interface IUsuarioRepository {
  create(data: CreateProps): Promise<Usuario>
  findById(data: FindByIdProps): Promise<Usuario>
  findAll(): Promise<Usuario[]>
}
