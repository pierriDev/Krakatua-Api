import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class CampeonatosController extends MasterController {
    constructor() {
        super(new repositories.CampeonatosRepository());
    }
}
