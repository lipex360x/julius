import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeUsuarioRepository from '@modules/usuario/repositories/fakes/FakeUsuarioRepository'
import CreateSessionService from './CreateSessionService'

let fakeUsuarioRepository: FakeUsuarioRepository
let createSessionService: CreateSessionService

describe('AuthUsuario', () => {
  beforeEach(() => {
    fakeUsuarioRepository = new FakeUsuarioRepository()
    createSessionService = new CreateSessionService(fakeUsuarioRepository)
  })

  it('should be able to authenticate an user', async () => {
    await fakeUsuarioRepository.create({
      nome: Faker.internet.userName(),
      email: 'johndoe@mail.com',
      password: '123456'
    })

    const response = await createSessionService.execute({ email: 'johndoe@mail.com', password: '123456' })

    expect(response).toHaveProperty('token')
  })

  it('should not be able to authenticate a non-existing user', async () => {
    await expect(createSessionService.execute({
      email: 'johndoe@mail.com', password: '123456'
    })).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate with password is wrong', async () => {
    await fakeUsuarioRepository.create({
      nome: Faker.internet.userName(),
      email: 'johndoe@mail.com',
      password: '123456'
    })

    await expect(createSessionService.execute({
      email: 'johndoe@mail.com', password: '112233'
    })).rejects.toBeInstanceOf(AppError)
  })
})
