import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  CHAMADAROUTES
 * * /chamada
 */

export default class ChamadaRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.ChamadaController());
        this.endpoint = "/chamada";
    }
}
