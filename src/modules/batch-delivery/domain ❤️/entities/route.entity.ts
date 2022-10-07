import { Entity } from "src/lib/entities/entity";
import { Delivery } from "../value-objects/delivery";
import { RouteSpecification } from "../value-objects/routeSpecification";
import { Stop } from "../value-objects/stop";
import { Location } from "../value-objects/location";
import { Driver } from "./driver.entity";

export class Route extends Entity{

    private readonly origin: Location;
    private readonly trackingId: number;
    private delivery: Delivery;
    private readonly stops: Array<Stop>
    private routeSpecification: RouteSpecification;
    private driver: Driver;


    constructor(id: number, trackingId: number, routeSpecification: RouteSpecification){
        super(id);

        // can do some validations
        
        this.trackingId = trackingId;
        this.routeSpecification = routeSpecification;
    }


    public validate(): void {
        throw new Error("Method not implemented.");
    }

    public assignDriver(driver: Driver): void {
        // perform some validation
        this.driver = driver;
    }

    public deliverToStop(stopId: number){
        this.delivery.create();
    }


    
}