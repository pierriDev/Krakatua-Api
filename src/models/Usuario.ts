import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Administrador from "./Administrador";
import Alunos from "./Alunos";

@Entity()
export default class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  nascimento: Date;

  @Column()
  rg: string;

  @Column()
  cpf: string;

  @OneToMany(() => Alunos, (alunos) => alunos.id)
  alunos: Alunos[];

  @OneToMany(() => Administrador, (administrador) => administrador.id)
  administrador: Administrador[];

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
