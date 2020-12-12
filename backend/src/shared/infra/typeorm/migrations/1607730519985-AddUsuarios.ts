import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class AddUsuarios1607730519985 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'usuario_id',
            type: 'uuid',
            isPrimary: true
          },

          {
            name: 'nome',
            type: 'varchar'
          },

          {
            name: 'email',
            type: 'varchar'
          },

          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },

          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios')
  }
}
