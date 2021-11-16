
import models from "../models/init";

import MasterRepository from "./master-repository";

export default class AlunoChamadaRepository extends MasterRepository {
    constructor() {
        super(models.AlunoChamada);
    }
}
