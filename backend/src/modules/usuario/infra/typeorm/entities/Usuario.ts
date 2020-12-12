import { v4 as uuid } from 'uuid'
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm'

@Entity('usuarios')
export default class Usuario {
  @PrimaryColumn('uuid')
  usuario_id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  usuarioProps (): void {
    this.usuario_id = uuid()
  }
}
