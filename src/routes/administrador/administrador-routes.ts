import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  ADMINISTRADOR ROUTES
 * * /administrador
 */

export default class AdministradorRoutes extends MasterRoutes {
  endpoint: string;
  constructor() {
    super(new controllers.AdmController());
    this.endpoint = "/administrador";

    /*this.endpoints["login"] = {
      login: {
        endpoint: this.router.post("/login", this.controller.login),
      },
    };*/
  }
}
