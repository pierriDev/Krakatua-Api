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
import Time from "./Time";

@Entity()
export default class AlunoTime {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Alunos, (alunos) => alunos.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "alunos_id" })
  alunos: Alunos;

  @ManyToOne(() => Time, (time) => time.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "time_id" })
  time: Time;

  /*Relacinar com aluno*/
  /*Relacinar com time*/

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
