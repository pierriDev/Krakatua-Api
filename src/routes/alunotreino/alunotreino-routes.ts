import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  ALUNOTREINOROUTES
 * * /alunotreino
 */

export default class AlunoTreinoRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.AlunoTreinoController());
        this.endpoint = "/alunotreino";
    }
}
