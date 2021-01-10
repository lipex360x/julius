import { v4 as uuid } from 'uuid'

import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository, { CreateProps, FindByUsuarioIdProps } from '../interfaces/ILancamentoRepository'

export default class FakeLancamentoRepository implements ILancamentoRepository {
  private repository: Lancamento[] = []

  async create ({ usuario_id, description, value, date }:CreateProps): Promise<Lancamento> {
    const lancamento = new Lancamento()

    Object.assign(lancamento, {
      lancamento_id: uuid(),
      usuario_id,
      description,
      value,
      date,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(lancamento)

    return lancamento
  }

  async findByUsuarioId ({ usuario_id }:FindByUsuarioIdProps): Promise<Lancamento[]> {
    const getLancamentos = this.repository.filter(Lancamento => Lancamento.usuario_id === usuario_id)

    return getLancamentos
  }
}
