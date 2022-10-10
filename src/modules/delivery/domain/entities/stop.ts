import { Entity } from "../../../../lib/base/entities/entity";
import { Result } from "../../../../lib/types/result";
import { DomainErrors } from "../errors";
import { Location } from "../value-objects/location";

export enum StopStatus{
    'IN_TRANSIT' = 1,
    'ARRIVED' = 2,
    'DELIVERED' = 3,
}

export class Stop extends Entity{
    
    private readonly location: Location;
    private readonly customerId: number;
    private _status: StopStatus;

    public get status(): StopStatus {
        return this._status;
    }
    
    public deliver(): Result<void>{
        
        if(this.status === StopStatus.DELIVERED){
            return Result.fail<void>(DomainErrors.StopAlreadyDeliveredError);
        }

        this._status = StopStatus.DELIVERED;

        return Result.ok<void>();
    }


}