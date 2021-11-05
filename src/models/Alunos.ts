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
import AlunoTime from "./AlunoTime";
import AlunoTreino from "./AlunoTreino";
import Pagamento from "./Pagamentos";
import Usuario from "./Usuario";

@Entity()
export default class Alunos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  foto: string;

  @Column()
  categoria: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;

  @OneToMany(() => AlunoTime, (alunotime) => alunotime.id)
  alunotime: AlunoTime[];

  @OneToMany(() => AlunoChamada, (alunochamada) => alunochamada.id)
  alunochamada: AlunoChamada[];

  @OneToMany(() => AlunoTreino, (alunotreino) => alunotreino.id)
  alunotreino: AlunoTreino[];

  @OneToMany(() => Pagamento, (pagamento) => pagamento.id)
  pagamento: Pagamento[];

  /*Relacionar com usuario*/

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
