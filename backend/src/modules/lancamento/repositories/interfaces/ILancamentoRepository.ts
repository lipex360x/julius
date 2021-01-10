import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'

export interface CreateProps {
  usuario_id: string
  description: string
  value: number
  date: string
}

export interface FindByUsuarioIdProps {
  usuario_id: string
}

export interface FindByIdProps {
  lancamento_id: string
}

export interface SaveProps {
  lancamento: Lancamento
}

export default interface ILancamentoRepository {
  create(data: CreateProps): Promise<Lancamento>
  save(data: SaveProps): Promise<Lancamento>
  findById(data: FindByIdProps): Promise<Lancamento>
  findByUsuarioId(data: FindByUsuarioIdProps): Promise<Lancamento[]>
}
