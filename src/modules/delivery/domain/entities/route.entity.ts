import { Entity } from "../../../../lib/base/entities/entity";
import { Stop } from "./stop";
import { Location } from "../value-objects/location";
import { Driver } from "./driver.entity";
import { Result } from "../../../../lib/types/result";
import { DomainErrors } from "../errors";
import { BadRequestException } from "@nestjs/common";

export enum RouteStatus {
    'NOT_STARTED' = 1,
    'IN_TRANSIT' = 2,
    'COMPLETED' = 3

}

export class Route extends Entity{

    
    private readonly _origin: Location;
    private readonly _trackingId: string;
    private readonly _title: string;
    private readonly _stops: Stop[];
    private _status: RouteStatus;
    private _driver: Driver;

    
    constructor(id: number, trackingId: string, title: string, stops: Stop[]){
        super(id);
        
        // if(this.stops.length === 0){
        //     throw new BadRequestException();
        // }
        
        this._trackingId = trackingId;
        this._title = title;
        this._stops = stops;
    }

    public get stops(): ReadonlyArray<Stop>{
        return this.stops;
    }

    public get driver(): Driver{
        return this._driver;
    }

    public assignDriver(driver: Driver): Result<void> {

        if(!driver.isAvailable()){
            return Result.fail<void>(DomainErrors.DriverAlreadyAssignedError);
        }

        this._driver = driver;
        this._driver.isAssigned = true;

        return Result.ok<void>();
    }

    public deliverToStop(stopId: number): Result<void>{

        const stop: Stop = this.findStop(stopId);

        if(!stop){
            return Result.fail<void>(DomainErrors.StopNotFoundError);
        }

        return stop.deliver();

    }

    public findStop(stopId: number): Stop {
       return this._stops.find((stop)=>stop.id == stopId);
    }

    
}