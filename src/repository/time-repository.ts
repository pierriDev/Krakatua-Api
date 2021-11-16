import models from "../models/init";

import MasterRepository from "./master-repository";

export default class TimeRepository extends MasterRepository {
    constructor() {
        super(models.Time);
    }
}
