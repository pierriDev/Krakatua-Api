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
import AlunoChamada from "./AlunoChamada";
import Treinos from "./Treinos";

@Entity()
export default class Chamada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @ManyToOne(() => Treinos, (treinos) => treinos.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "treinos_id" })
  treinos: Treinos;

  @OneToMany(() => AlunoChamada, (alunochamada) => alunochamada.id)
  alunochamada: AlunoChamada[];

  /*relacionar com treino*/

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
