import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import AlunoTime from "./AlunoTime";
import Campeonatos from "./Campeonatos";

@Entity()
export default class Time {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Campeonatos, (campeonatos) => campeonatos.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "campeonatos_id" })
  campeonatos: Campeonatos;

  @OneToMany(() => AlunoTime, (alunotime) => alunotime.id)
  alunotime: AlunoTime[];

  /*Relacionar com campeonato*/

  @Column()
  categoria: string;

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
