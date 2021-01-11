import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addCollumnSenhaUsuarios1610407638183
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'usuarios',
      new TableColumn({
        name: 'senha',
        type: 'varchar',
        isNullable: true
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('usuarios', 'senha')
  }
}
