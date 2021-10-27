import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
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
