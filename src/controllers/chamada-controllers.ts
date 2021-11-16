import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class ChamadaController extends MasterController {
    constructor() {
        super(new repositories.ChamadaRepository());
    }
}
