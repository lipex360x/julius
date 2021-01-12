import Faker from 'faker'

import AppError from '@shared/errors/AppError'

import FakeUsuarioRepository from '@modules/usuario/repositories/fakes/FakeUsuarioRepository'
import CreateUsuarioService from './CreateUsuarioService'

let fakeUsuarioRepository: FakeUsuarioRepository
let createUsuarioService: CreateUsuarioService

describe('CreateUsuario', () => {
  beforeEach(() => {
    fakeUsuarioRepository = new FakeUsuarioRepository()
    createUsuarioService = new CreateUsuarioService(fakeUsuarioRepository)
  })

  it('should be able to create a new user', async () => {
    const newUser = await createUsuarioService.execute({
      nome: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    expect(newUser).toHaveProperty('usuario_id')
  })

  it('should not be able to create a new user with duplicate email', async () => {
    const user = await fakeUsuarioRepository.create({
      nome: Faker.name.firstName(),
      email: Faker.internet.email(),
      password: Faker.internet.password()
    })

    await expect(
      createUsuarioService.execute({
        nome: Faker.name.findName(),
        email: user.email,
        password: Faker.internet.password()
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
