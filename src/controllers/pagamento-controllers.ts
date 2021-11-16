import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class PagamentoController extends MasterController {
    constructor() {
        super(new repositories.PagamantoRepository());
    }
}
