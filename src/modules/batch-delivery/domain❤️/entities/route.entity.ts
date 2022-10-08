import { Entity } from "src/lib/entities/entity";
import { Delivery } from "../value-objects/delivery";
import { RouteSpecification } from "../value-objects/routeSpecification";
import { Stop } from "./stop";
import { Location } from "../value-objects/location";
import { Driver } from "./driver.entity";

export enum RouteStatus {
    'NOT_STARTED' = 1,
    'IN_TRANSIT' = 2,
    'COMPLETED' = 3

}

export class Route extends Entity{

    private readonly origin: Location;
    private readonly trackingId: string;
    private readonly title: string;
    private readonly stops: Stop[];
    private readonly status: RouteStatus;
    private driver: Driver;
    
    constructor(id: number, trackingId: string, title: string){
        super(id);

        // can do some validations
        
        this.trackingId = trackingId;
        this.title = title;
    }


    public validate(): void {
        throw new Error("Method not implemented.");
    }

    public assignDriver(driver: Driver): void {

        if(driver.isAvailable()){
            this.driver = driver;
        }

        throw new Error("CANT ASSIGN TO THIS DRIVER");
    }

    public deliverToStop(stopId: number){
        const stop: Stop = this.stops.find((stop)=>stop.id === stopId);

        if(!stop){
            throw new Error('STOP DOES NOT EXIST.');
        }

        stop.deliver();

    }


    
}