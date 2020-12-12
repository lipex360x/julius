import { container } from 'tsyringe'

import ILancamentoRepository from './interfaces/ILancamentoRepository'
import LancamentoRepository from '@modules/lancamento/infra/typeorm/repositories/LancamentoRepository'

const providers = {
  postgresLancamento: LancamentoRepository
}

container.registerSingleton<ILancamentoRepository>(
  'LancamentoRepository',
  providers.postgresLancamento
)
