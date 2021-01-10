import { inject, injectable } from 'tsyringe'

// import AppError from '@shared/errors/AppError'
import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import ILancamentoRepository from '@modules/lancamento/repositories/interfaces/ILancamentoRepository'

interface Request{
  usuario_id: string
}

@injectable()
export default class ListLancamentosService {
  constructor (
    @inject('LancamentoRepository')
    private repository: ILancamentoRepository
  ) {}

  async execute ({ usuario_id }: Request): Promise<Lancamento[]> {
    const getLancamentos = await this.repository.findByUsuarioId({ usuario_id })

    return getLancamentos
  }
}
