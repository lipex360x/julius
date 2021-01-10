import { Repository, getRepository } from 'typeorm'

import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository, { CreateProps, FindByUsuarioIdProps, FindByIdProps, SaveProps } from '@modules/lancamento/repositories/interfaces/ILancamentoRepository'

export default class LancamentoRepository implements ILancamentoRepository {
  private repository: Repository<Lancamento>

  constructor () {
    this.repository = getRepository(Lancamento)
  }

  async create ({ usuario_id, description, value, date }:CreateProps): Promise<Lancamento> {
    const lancamento = this.repository.create({ usuario_id, description, value, date })

    await this.repository.save(lancamento)

    return lancamento
  }

  async findById ({ lancamento_id }:FindByIdProps): Promise<Lancamento> {
    const getLancamento = await this.repository.findOne(lancamento_id)

    return getLancamento
  }

  async findByUsuarioId ({ usuario_id }:FindByUsuarioIdProps): Promise<Lancamento[]> {
    const getLancamento = await this.repository.find({
      where: {
        usuario_id
      }
    })

    return getLancamento
  }

  async save ({ lancamento }:SaveProps): Promise<Lancamento> {
    const newLancamento = await this.repository.save(lancamento)

    return newLancamento
  }
}
