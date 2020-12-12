import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'

export interface CreateProps {
  usuario_id: string
  descricao: string
  valor: number
  data: Date
}

export interface FindByUsuarioIdProps {
  usuario_id: string
}

export default interface ILancamentoRepository {
  create(data: CreateProps): Promise<Lancamento>
  // findByUsuarioId(data: FindByUsuarioIdProps): Promise<Lancamento[]>
}
