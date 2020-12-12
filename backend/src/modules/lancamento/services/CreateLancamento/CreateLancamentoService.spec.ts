import Faker from 'faker'

import AppError from '@shared/errors/AppError'

import FakeLancamentoRepository from '@modules/lancamento/repositories/fakes/FakeLancamentoRepository'
import FakeUsuarioRepository from '@modules/usuario/repositories/fakes/FakeUsuarioRepository'

import CreateLancamentoService from './CreateLancamentoService'

let fakeLancamentoRepository: FakeLancamentoRepository
let fakeUsuarioRepository: FakeUsuarioRepository

let createLancamentoService: CreateLancamentoService

describe('TEST_NAME', () => {
  beforeEach(() => {
    fakeLancamentoRepository = new FakeLancamentoRepository()
    fakeUsuarioRepository = new FakeUsuarioRepository()

    createLancamentoService = new CreateLancamentoService(fakeLancamentoRepository, fakeUsuarioRepository)
  })

  it('should be able to create a new entry', async () => {
    const user = await fakeUsuarioRepository.create({
      nome: Faker.name.firstName(),
      email: Faker.internet.email()
    })

    const lancamento = await createLancamentoService.execute({
      usuario_id: user.usuario_id,
      descricao: Faker.lorem.words(2),
      data: new Date(),
      valor: 35.90
    })

    expect(lancamento).toHaveProperty('lancamento_id')
  })

  it('should not be able to create a entry to non-existing user', async () => {
    await expect(
      createLancamentoService.execute({
        usuario_id: Faker.random.uuid(),
        descricao: Faker.lorem.words(2),
        data: Faker.date.recent(),
        valor: 35.90
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
