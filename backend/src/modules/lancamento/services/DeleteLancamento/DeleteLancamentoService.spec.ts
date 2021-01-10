import AppError from '@shared/errors/AppError'

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
    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 1, 1, 10).getTime()
    })

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

    const deleteLancamento = await deleteLancamentoService.execute({ lancamento_id: setLancamento.lancamento_id })
    const getLancamentos = await fakeLancamentoRepository.findByUsuarioId({ usuario_id: 'user-id' })

    expect(getLancamentos).toHaveLength(2)

    expect(deleteLancamento).toEqual(
      expect.objectContaining({
        deleted_at: new Date(Date.now())
      })
    )
  })

  it('should not be able to delete an non-existing lancamento', async () => {
    await expect(
      deleteLancamentoService.execute({ lancamento_id: 'non-existing' })
    ).rejects.toBeInstanceOf(AppError)
  })
})
