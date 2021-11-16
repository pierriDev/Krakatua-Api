import repositories from "../repository/init";

import MasterController from "./master-controllers";

export default class AdministradorController extends MasterController {
  constructor() {
    super(new repositories.AdministradorRepository());
  }
}
