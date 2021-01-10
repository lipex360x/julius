import { inject, injectable } from 'tsyringe'

import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository from '@modules/lancamento/repositories/interfaces/ILancamentoRepository'

interface Request{
  lancamento_id: string
}

@injectable()
export default class DeleteLancamentoService {
  constructor (
    @inject('INJECT_REPOSITORY')
    private repository: ILancamentoRepository
  ) {}

  async execute ({ lancamento_id }: Request): Promise<Lancamento> {
    const deleteLancamento = await this.repository.delete({ lancamento_id })

    return deleteLancamento
  }
}
