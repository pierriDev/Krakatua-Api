import controllers from "../../controllers/init";
import MasterRoutes from "../master-routes";

/**
 * *  TIMEROUTES
 * * /time
 */

export default class TimeRoutes extends MasterRoutes {
    endpoint: string;
    constructor() {
        super(new controllers.TimeController());
        this.endpoint = "/time";
    }
}
