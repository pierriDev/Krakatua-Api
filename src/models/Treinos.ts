import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import AlunoTreino from "./AlunoTreino";
import Chamada from "./Chamada";
import Time from "./Time";

@Entity()
export default class Treinos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Titulo: string;

  @Column()
  hora_inicio: Time;

  @Column()
  hora_final: Time;

  @OneToMany(() => AlunoTreino, (alunotreino) => alunotreino.id)
  alunotreino: AlunoTreino[];

  @OneToMany(() => Chamada, (chamada) => chamada.id)
  chamada: Chamada[];

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
