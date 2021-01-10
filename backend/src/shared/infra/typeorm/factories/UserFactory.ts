import Faker from 'faker'
import { define } from 'typeorm-seeding'
import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'

define(Usuario, (faker: typeof Faker, context: { roles: string[] }) => {
  const dateCreate = new Date()
  const entityName = new Usuario()

  Object.assign(Usuario, {
    usuario_id: faker.random.uuid(),
    email: faker.internet.email(),
    created_at: dateCreate,
    updated_at: dateCreate
  })

  return entityName
})
