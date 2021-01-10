import { inject, injectable } from 'tsyringe'

import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository from '@modules/lancamento/repositories/interfaces/ILancamentoRepository'
import AppError from '@shared/errors/AppError'

interface Request{
  lancamento_id: string
}

@injectable()
export default class DeleteLancamentoService {
  constructor (
    @inject('LancamentoRepository')
    private repository: ILancamentoRepository
  ) {}

  async execute ({ lancamento_id }: Request): Promise<Lancamento> {
    const getLancamento = await this.repository.findById({ lancamento_id })

    if (!getLancamento) throw new AppError('Lancamento does not exists')

    getLancamento.deleted_at = new Date(Date.now())

    await this.repository.save({ lancamento: getLancamento })

    return getLancamento
  }
}
