import { Entity } from "src/lib/base/entities/entity";
import { Result } from "src/lib/types/result";
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
    private status: StopStatus;

    public validate(): void {
        //perform validation
    }

    public deliver(): Result<void>{
        
        if(this.status === StopStatus.DELIVERED){
            return Result.fail<void>(DomainErrors.StopAlreadyDeliveredError);
        }

        this.status = StopStatus.DELIVERED;

        return Result.ok<void>();
    }


}