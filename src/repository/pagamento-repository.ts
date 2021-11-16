import models from "../models/init";

import MasterRepository from "./master-repository";

export default class PagamantoRepository extends MasterRepository {
    constructor() {
        super(models.Pagamento);
    }
}
