import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class AlunoChamadaController extends MasterController {
    constructor() {
        super(new repositories.AlunoChamadaRepository());
    }
}
