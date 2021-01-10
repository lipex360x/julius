import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'

export default class UserSeed implements Seeder {
  public async run (factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Usuario)
      .values([
        {
          usuario_id: '8fa4df9a-92bc-4d1b-bf0c-9e075751c3e6',
          nome: 'John Doe',
          email: 'johndoe@mail.com'
        }
      ])
      .execute()
  }
}
