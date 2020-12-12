import { v4 as uuid } from 'uuid'

import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository, { CreateProps } from '../interfaces/ILancamentoRepository'

export default class FakeLancamentoRepository implements ILancamentoRepository {
  private repository: Lancamento[] = []

  async create ({ usuario_id, descricao, valor, data }:CreateProps): Promise<Lancamento> {
    const lancamento = new Lancamento()

    Object.assign(lancamento, {
      lancamento_id: uuid(),
      usuario_id,
      descricao,
      valor,
      data,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(lancamento)

    return lancamento
  }
}
