import repositories from "../repository/init";
import MasterController from "./master-controllers";

export default class UsuarioController extends MasterController {
    constructor() {
        super(new repositories.UsuarioRepository());
    }
}
