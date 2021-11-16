import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  TREINOSROUTES
 * * /treinos
 */

export default class TreinosRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.TreinosController());
        this.endpoint = "/treinos";
    }
}
