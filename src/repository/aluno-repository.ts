
import models from "../models/init";

import MasterRepository from "./master-repository";

export default class AlunoRepository extends MasterRepository {
  constructor() {
    super(models.Alunos);
  }
}
