import { Post } from "@nestjs/common"
import { DeliveryService } from "../../application/deliveryService"


export class DeliveryController{

    private _deliveryService: DeliveryService;

    constructor(){
        this.deliverService = new DeliveryService();
    }

    @Post('/')
    public async assignRouteToDriver(){

    }
    this.deliverService.assignRoute(vv)
}
