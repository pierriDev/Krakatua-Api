import models from "../models/init";

import MasterRepository from "./master-repository";

export default class Treinospository extends MasterRepository {
    constructor() {
        super(models.Treinos);
    }
}
