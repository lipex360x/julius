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

export default interface ILancamentoRepository {
  create(data: CreateProps): Promise<Lancamento>
  // findByUsuarioId(data: FindByUsuarioIdProps): Promise<Lancamento[]>
}
