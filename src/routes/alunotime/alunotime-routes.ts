import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  ALUNOTIMEROUTES
 * * /alunotime
 */

export default class AlunoTimeRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.AlunoTimeController());
        this.endpoint = "/alunotime";
    }
}
