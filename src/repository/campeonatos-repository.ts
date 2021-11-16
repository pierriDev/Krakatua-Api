import models from "../models/init";

import MasterRepository from "./master-repository";

export default class CampeonatosRepository extends MasterRepository {
    constructor() {
        super(models.Campeonatos);
    }
}
