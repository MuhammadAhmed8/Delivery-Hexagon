import { Post } from "@nestjs/common"
import { DeliveryService } from "../../application/deliveryService"


export class DeliveryController{

    private _deliveryService: DeliveryService;

    constructor(){
        this._deliveryService = new DeliveryService();
    }

    @Post('/')
    public async assignRouteToDriver(){
        
        this._deliveryService.assignDriver();
    }
    
}
