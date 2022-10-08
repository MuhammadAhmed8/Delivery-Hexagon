import { Entity } from "src/lib/entities/entity";
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

    public deliver(): void{
        
        if(this.status === StopStatus.DELIVERED){
            throw new Error('Stop Already Delivered');
        }

        this.status = StopStatus.DELIVERED;
    }


}