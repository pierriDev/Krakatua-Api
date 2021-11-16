import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  ALUNOCHAMADAROUTES
 * * /alunochamada
 */

export default class AlunoChamadaRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.AlunoChamadaController());
        this.endpoint = "/alunochamada";
    }
}
