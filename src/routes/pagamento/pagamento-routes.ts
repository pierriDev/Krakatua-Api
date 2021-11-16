import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  PAGAMENTOROUTES
 * * /pagamento
 */

export default class PagamentoRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.PagamentoController());
        this.endpoint = "/pagamento";
    }
}
