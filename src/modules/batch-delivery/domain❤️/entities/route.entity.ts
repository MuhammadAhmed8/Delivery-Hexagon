import { Entity } from "src/lib/base/entities/entity";
import { Delivery } from "../value-objects/delivery";
import { RouteSpecification } from "../value-objects/routeSpecification";
import { Stop } from "./stop";
import { Location } from "../value-objects/location";
import { Driver } from "./driver.entity";
import { Result } from "src/lib/types/result";
import { CustomError } from "src/lib/types/error";

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
        
        this.trackingId = trackingId;
        this.title = title;
    }


    public validate(): void {
        // perform some validation;
    }

    public assignDriver(driver: Driver): Result<void> {

        if(!driver.isAvailable()){
            return Result.fail<void>(new CustomError("DRIVER IS ALREADY ASSIGNED.",400));
        }

        this.driver = driver;
        
        return Result.ok<void>();
    }

    public deliverToStop(stopId: number): Result<void>{

        const stop: Stop = this.stops.find((stop)=>stop.id === stopId);

        if(!stop){
            return Result.fail<void>(new CustomError("STOP DOES NOT EXIST.",400));
        }

        stop.deliver();

    }

    
}