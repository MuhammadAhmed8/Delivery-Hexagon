import { Body, Controller, Param, Post, Put } from "@nestjs/common"
import { BaseController } from "src/lib/controller";
import { DeliveryService } from "../../application/deliveryService"


@Controller('/route')
export class DeliveryController extends BaseController{

    private _deliveryService: DeliveryService;

    constructor(){
        super();
        this._deliveryService = new DeliveryService();
    }

    @Put('/:id/driver')
    public async assignRouteToDriver(@Param('id') routeId: number, @Body() body: any){
        
        const {driverId} = body;

        await this._deliveryService.assignDriver(routeId, driverId);

        const responseDto: any = {
            message: 'Route Assigned To Driver'
        }

        return this.ok(responseDto);

    }
    
}
