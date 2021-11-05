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
import Chamada from "./Chamada";

@Entity()
export default class AlunoChamada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  presente: Boolean;

  @ManyToOne(() => Alunos, (alunos) => alunos.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "alunos_id" })
  alunos: Alunos;

  @ManyToOne(() => Chamada, (chamada) => chamada.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "chamada_id" })
  chamada: Chamada;

  /*relacionar com aluno*/
  /*relacionar com chamada*/
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
