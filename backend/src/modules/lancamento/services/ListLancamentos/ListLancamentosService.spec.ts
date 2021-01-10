// import AppError from '@shared/errors/AppError'
// import Faker from 'faker'

import FakeLancamentoRepository from '@modules/lancamento/repositories/fakes/FakeLancamentoRepository'
import ListLancamentosService from './ListLancamentosService'

describe('ListLancamentos', () => {
  let listLancamentos: ListLancamentosService
  let fakeLancamentoRepository: FakeLancamentoRepository

  beforeEach(() => {
    fakeLancamentoRepository = new FakeLancamentoRepository()
    listLancamentos = new ListLancamentosService(fakeLancamentoRepository)
  })

  it('should be able to list Lancamentos', async () => {
    fakeLancamentoRepository.create({
      usuario_id: 'user-id',
      date: '2021-01-01',
      description: 'Transaction Description',
      value: 25.00
    })

    fakeLancamentoRepository.create({
      usuario_id: 'user-id',
      date: '2021-01-01',
      description: 'Transaction Description',
      value: 25.00
    })

    fakeLancamentoRepository.create({
      usuario_id: 'user-id',
      date: '2021-01-01',
      description: 'Transaction Description',
      value: 25.00
    })
    const getLancamentos = await listLancamentos.execute({ usuario_id: 'user-id' })

    expect(getLancamentos).toHaveLength(3)
  })
})
