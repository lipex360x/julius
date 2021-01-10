import { v4 as uuid } from 'uuid'
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import Usuario from '@modules/usuario/infra/typeorm/entities/Usuario'

@Entity('lancamentos')
export default class Lancamento {
  @PrimaryColumn('uuid')
  lancamento_id: string;

  @Column()
  description: string;

  @Column('decimal', { scale: 2 })
  value: number;

  @Column('timestamp with time zone')
  date: string;

  @ManyToOne(() => Usuario, usuario => usuario.lancamentos)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario

  @Column('uuid')
  usuario_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  lancamentoProps (): void {
    this.lancamento_id = uuid()
  }
}
