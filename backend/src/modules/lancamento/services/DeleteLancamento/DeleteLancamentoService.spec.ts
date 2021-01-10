// import AppError from '@shared/errors/AppError'
// import Faker from 'faker'

import FakeLancamentoRepository from '@modules/lancamento/repositories/fakes/FakeLancamentoRepository'
import DeleteLancamentoService from './DeleteLancamentoService'

let fakeLancamentoRepository: FakeLancamentoRepository
let deleteLancamentoService: DeleteLancamentoService

describe('DeleteLancamento', () => {
  beforeEach(() => {
    fakeLancamentoRepository = new FakeLancamentoRepository()
    deleteLancamentoService = new DeleteLancamentoService(fakeLancamentoRepository)
  })

  it('should be able to delete a lancamento', async () => {
    const setLancamento = await fakeLancamentoRepository.create({
      usuario_id: 'user-id',
      date: '2021-01-01',
      description: 'Transaction Description',
      value: 25.00
    })

    await fakeLancamentoRepository.create({
      usuario_id: 'user-id',
      date: '2021-01-01',
      description: 'Transaction Description',
      value: 25.00
    })

    await fakeLancamentoRepository.create({
      usuario_id: 'user-id',
      date: '2021-01-01',
      description: 'Transaction Description',
      value: 25.00
    })

    const getLancamentos = await fakeLancamentoRepository.findByUsuarioId({ usuario_id: 'user-id' })
    expect(getLancamentos).toHaveLength(3)

    const deleteLancamento = await deleteLancamentoService.execute({ lancamento_id: setLancamento.lancamento_id })

    const getLancamentosAfterDelete = await fakeLancamentoRepository.findByUsuarioId({ usuario_id: 'user-id' })
    expect(getLancamentosAfterDelete).toHaveLength(2)

    expect(deleteLancamento).toHaveProperty('lancamento_id')
  })
})
