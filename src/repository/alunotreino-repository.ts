import models from "../models/init";

import MasterRepository from "./master-repository";

export default class AlunoTreinoRepository extends MasterRepository {
    constructor() {
        super(models.AlunoTreino);
    }
}
