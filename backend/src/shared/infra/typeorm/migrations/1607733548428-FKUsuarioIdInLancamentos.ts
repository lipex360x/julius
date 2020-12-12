import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm'

export default class FKUsuarioIdInLancamentos1607733548428
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'lancamentos',
      new TableColumn({
        name: 'usuario_id',
        type: 'uuid',
        isNullable: true
      })
    )

    await queryRunner.createForeignKey(
      'lancamentos',
      new TableForeignKey({
        name: 'lancamentos_To_usuarios',
        columnNames: ['usuario_id'],

        referencedTableName: 'usuarios',
        referencedColumnNames: ['usuario_id'],

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('lancamentos', 'lancamentos_To_usuarios')
    await queryRunner.dropColumn('lancamentos', 'usuario_id')
  }
}
