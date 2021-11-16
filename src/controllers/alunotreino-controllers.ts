import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class AlunoTreinoController extends MasterController {
    constructor() {
        super(new repositories.AlunoTreinoRepository());
    }
}
