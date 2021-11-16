import models from "../models/init";

import MasterRepository from "./master-repository";

export default class AdministradorRepository extends MasterRepository {
  constructor() {
    super(models.Administrador);
  }
}
