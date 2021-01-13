import { v4 as uuid } from 'uuid'
import bcrypt from 'bcryptjs'

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
  BeforeUpdate
} from 'typeorm'
import Lancamento from '@modules/lancamento/infra/typeorm/entities/Lancamento'
import { Exclude } from 'class-transformer'

@Entity('usuarios')
export default class Usuario {
  @PrimaryColumn('uuid')
  usuario_id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

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

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword (): Promise<void> {
    this.password = await bcrypt.hash(this.password, 8)
  }
}
