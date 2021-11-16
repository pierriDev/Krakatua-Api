import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class AlunoController extends MasterController {
  constructor() {
    super(new repositories.AlunoRepository());
    /* this.request_fields = [
       "nome_completo",
       "email",
       "telefone",
       "cpf",
       "endereco",
       "senha",
     ];*/
  }
}
