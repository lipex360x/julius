import { v4 as uuid } from 'uuid'
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany
} from 'typeorm'
import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'

@Entity('usuarios')
export default class Usuario {
  @PrimaryColumn('uuid')
  usuario_id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @OneToMany(() => Lancamento, lancamento => lancamento.usuario, { eager: true })
  lancamentos: Lancamento[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  usuarioProps (): void {
    this.usuario_id = uuid()
  }
}