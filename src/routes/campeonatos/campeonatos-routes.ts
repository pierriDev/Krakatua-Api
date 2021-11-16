import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  CAMPEONATOSROUTES
 * * /campeonatos
 */

export default class CampeonatosRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.CampeonatosController());
        this.endpoint = "/campeonatos";
    }
}
