import {Entity, CreateDateColumn, UpdateDateColumn, Column, OneToMany, PrimaryColumn, BeforeInsert} from "typeorm";
import { v4 as uuid } from 'uuid'
import { Lancamento } from './Lancamento'

@Entity('usuario')
export class Usuario {
    
    constructor(nome: string, email: string){
        this.nome = nome
        this.email = email
    }

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @BeforeInsert()
    classId() {
        this.id = uuid()
    }

    @OneToMany(() => Lancamento, lancamento => lancamento.usuario)
    lancamentos: Lancamento[];   
}
