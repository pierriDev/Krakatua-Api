import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class TreinosController extends MasterController {
    constructor() {
        super(new repositories.Treinospository());
    }
}
