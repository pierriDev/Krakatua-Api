import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class AlunoTimeController extends MasterController {
    constructor() {
        super(new repositories.AlunoTimeRepository());
    }
}
