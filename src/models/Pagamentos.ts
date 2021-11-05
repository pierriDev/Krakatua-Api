import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Alunos from "./Alunos";

@Entity()
export default class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column()
  motivo: string;

  @Column()
  status: string;

  @Column()
  tipo_pagamento: string;

  @Column()
  data_pagamento: Date;

  @ManyToOne(() => Alunos, (alunos) => alunos.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "alunos_id" })
  alunos: Alunos;

  /*relacionar com aluno*/

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;
}
