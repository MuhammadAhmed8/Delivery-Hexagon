import { Entity } from "src/lib/base/entities/entity";
import { Delivery } from "../value-objects/delivery";
import { RouteSpecification } from "../value-objects/routeSpecification";
import { Stop } from "./stop";
import { Location } from "../value-objects/location";
import { Driver } from "./driver.entity";
import { Result } from "src/lib/types/result";
import { CustomError } from "src/lib/types/error";
import { DomainErrors } from "../errors";
import { BadRequestException } from "@nestjs/common";

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
    
    constructor(id: number, trackingId: string, title: string, stops: Stop[]){
        super(id);
        
        // if(this.stops.length === 0){
        //     throw new BadRequestException();
        // }
        
        this.trackingId = trackingId;
        this.title = title;
        this.stops = stops;
    }


    public assignDriver(driver: Driver): Result<void> {

        if(!driver.isAvailable()){
            return Result.fail<void>(DomainErrors.DriverAlreadyAssignedError);
        }

        this.driver = driver;
        this.driver.isAssigned = true;

        return Result.ok<void>();
    }

    public deliverToStop(stopId: number): Result<void>{

        const stop: Stop = this.stops.find((stop)=>stop.id == stopId);

        if(!stop){
            return Result.fail<void>(DomainErrors.StopNotFoundError);
        }

        return stop.deliver();

    }

    
}