import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class AddLancamentos1607733460917 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'lancamentos',
        columns: [
          {
            name: 'lancamento_id',
            type: 'uuid',
            isPrimary: true
          },

          {
            name: 'description',
            type: 'text'
          },

          {
            name: 'value',
            type: 'decimal',
            scale: 2
          },

          {
            name: 'date',
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
    await queryRunner.dropTable('lancamentos')
  }
}
