import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeUsuarioRepository from '@modules/usuario/repositories/fakes/FakeUsuarioRepository'
import FakeLancamentoRepository from '@modules/lancamento/repositories/fakes/FakeLancamentoRepository'

import ShowUsuarioService from './ShowUsuarioService'

let fakeUsuarioRepository: FakeUsuarioRepository
let fakeLancamentoRepository: FakeLancamentoRepository
let showUsuarioService: ShowUsuarioService

describe('ShowUsuario', () => {
  beforeEach(() => {
    fakeUsuarioRepository = new FakeUsuarioRepository()
    fakeLancamentoRepository = new FakeLancamentoRepository()
    showUsuarioService = new ShowUsuarioService(fakeUsuarioRepository)
  })

  it('should be able to show a user', async () => {
    const user = await fakeUsuarioRepository.create({
      nome: Faker.name.firstName(),
      email: Faker.internet.email()
    })

    await fakeLancamentoRepository.create({
      usuario_id: user.usuario_id,
      descricao: Faker.lorem.words(),
      data: new Date(),
      valor: 30.90
    })

    const getUsuario = await showUsuarioService.execute({ usuario_id: user.usuario_id })

    expect(getUsuario).toHaveProperty('usuario_id')
  })

  it('should not be able to show a non-existing user', async () => {
    await expect(
      showUsuarioService.execute({
        usuario_id: Faker.random.uuid()
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
