import { v4 as uuid } from 'uuid'

import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository, { CreateProps, FindByUsuarioIdProps, FindByIdProps, SaveProps } from '../interfaces/ILancamentoRepository'

export default class FakeLancamentoRepository implements ILancamentoRepository {
  private repository: Lancamento[] = []

  async create ({ usuario_id, description, value, date }:CreateProps): Promise<Lancamento> {
    const lancamento = new Lancamento()

    Object.assign(lancamento, {
      lancamento_id: uuid(),
      usuario_id,
      description,
      value,
      deleted_at: null,
      date
    })

    this.repository.push(lancamento)

    return lancamento
  }

  async findById ({ lancamento_id }:FindByIdProps): Promise<Lancamento> {
    const getLancamento = this.repository.find(lancamento => lancamento.lancamento_id === lancamento_id)

    return getLancamento
  }

  async findByUsuarioId ({ usuario_id }:FindByUsuarioIdProps): Promise<Lancamento[]> {
    const getLancamentos = this.repository.filter(lancamento =>
      lancamento.usuario_id === usuario_id && lancamento.deleted_at === null
    )

    return getLancamentos
  }

  async save ({ lancamento }:SaveProps): Promise<Lancamento> {
    const findIndex = this.repository.findIndex(getLancamento => getLancamento.lancamento_id === lancamento.lancamento_id)

    this.repository[findIndex] = lancamento

    return this.repository[findIndex]
  }
}
