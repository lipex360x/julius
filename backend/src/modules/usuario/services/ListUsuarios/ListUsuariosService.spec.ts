import Faker from 'faker'

import FakeUsuarioRepository from '@modules/usuario/repositories/fakes/FakeUsuarioRepository'
import ListUsuariosService from './ListUsuariosService'

let fakeUsuarioRepository: FakeUsuarioRepository
let listUsuariosService: ListUsuariosService

describe('ListUsuarios', () => {
  beforeEach(() => {
    fakeUsuarioRepository = new FakeUsuarioRepository()
    listUsuariosService = new ListUsuariosService(fakeUsuarioRepository)
  })

  it('should be able to list users', async () => {
    await fakeUsuarioRepository.create({
      nome: Faker.name.firstName(),
      email: Faker.internet.email()
    })

    await fakeUsuarioRepository.create({
      nome: Faker.name.firstName(),
      email: Faker.internet.email()
    })

    await fakeUsuarioRepository.create({
      nome: Faker.name.firstName(),
      email: Faker.internet.email()
    })

    const getUsuarios = await listUsuariosService.execute()

    expect(getUsuarios.length).toEqual(3)
  })
})
