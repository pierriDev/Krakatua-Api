
import models from "../models/init";

import MasterRepository from "./master-repository";

export default class AlunoTimeRepository extends MasterRepository {
    constructor() {
        super(models.AlunoTime);
    }
}
