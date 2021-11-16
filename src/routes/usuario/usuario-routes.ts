import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  USUARIOROUTES
 * * /usuario
 */

export default class UsuarioRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.UsuarioController());
        this.endpoint = "/usuario";
    }
}
