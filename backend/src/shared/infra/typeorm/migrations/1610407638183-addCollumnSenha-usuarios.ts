import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addCollumnpasswordUsuarios1610407638183
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'usuarios',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: true
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('usuarios', 'password')
  }
}
