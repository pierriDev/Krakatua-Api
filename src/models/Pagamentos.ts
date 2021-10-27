import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export default class Pagamentos {
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
