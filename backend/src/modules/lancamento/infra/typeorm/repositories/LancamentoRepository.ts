import { Repository, getRepository } from 'typeorm'

import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository, { CreateProps } from '@modules/lancamento/repositories/interfaces/ILancamentoRepository'

export default class LancamentoRepository implements ILancamentoRepository {
  private repository: Repository<Lancamento>

  constructor () {
    this.repository = getRepository(Lancamento)
  }

  async create ({ usuario_id, descricao, valor, data }:CreateProps): Promise<Lancamento> {
    const lancamento = this.repository.create({ usuario_id, descricao, valor, data })

    await this.repository.save(lancamento)

    return lancamento
  }
}
