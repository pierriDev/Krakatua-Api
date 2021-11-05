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
import Treinos from "./Treinos";

@Entity()
export default class AlunoTreino {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Alunos, (alunos) => alunos.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "alunos_id" })
  alunos: Alunos;

  @ManyToOne(() => Treinos, (treinos) => treinos.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "treinos_id" })
  treinos: Treinos;

  /*Relacinar com aluno*/
  /*Relacinar com treino*/

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  a;
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;
}
