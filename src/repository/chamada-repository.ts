import models from "../models/init";

import MasterRepository from "./master-repository";

export default class ChamadaRepository extends MasterRepository {
    constructor() {
        super(models.Chamada);
    }
}
