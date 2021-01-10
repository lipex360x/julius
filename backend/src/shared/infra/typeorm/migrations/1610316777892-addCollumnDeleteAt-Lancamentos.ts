import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addCollumnDeleteAtLancamentos1610316777892
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'lancamentos',
      new TableColumn({
        name: 'deleted_at',
        type: 'timestamp with time zone',
        isNullable: true,
        default: null
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('lancamentos', 'deleted_at')
  }
}
