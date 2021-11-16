import models from "../models/init";

import MasterRepository from "./master-repository";

export default class UsuarioRepository extends MasterRepository {
    constructor() {
        super(models.Usuario);
    }
}
