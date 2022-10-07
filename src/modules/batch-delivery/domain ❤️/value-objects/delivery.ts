import { TransportStatus } from "../entities/route.entity";

export class Delivery {

    create() {
        throw new Error("Method not implemented.");
    }
    
    public transporStatus: TransportStatus;
    public lastKnownLocation: Location;


}