import { Body, Controller, Param, Post, Put, Res } from "@nestjs/common"
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Response } from "express";
import { BaseController } from "src/lib/base/controller";
import { Result } from "src/lib/types/result";
import { IRouteService } from "src/modules/delivery/application/ports/in-ports/IRoute.service";
import { RouteService } from "src/modules/delivery/application/services/route.service";


@Controller('/route')
export class RouteController extends BaseController{

    constructor(private readonly _routeService: IRouteService){
        super();
    }

    @Put('/:id/driver')
    public async assignRouteToDriver(@Param('id') routeId: number, @Body() body: any,  @Res() res: Response){
        
        const {driverId} = body;

        const result: Result<void> = await this._routeService.assignDriver(routeId, driverId);

        if(result.isFailure){
            return this.fail(result.error,res);
        }

        const viewModel: any = {
            data: result.getValue(),
            message: 'Route Assigned To Driver'
        }

        return this.ok(viewModel, res);

    }

    @Put('/:id/stop/:stopId/delivery')
    public async deliverToStop(@Param('id') routeId: number, @Param('stopId') stopId: number,  @Res() res: Response){
        
        const result: Result<void> = await this._routeService.deliverToStop(stopId, routeId);

        if(result.isFailure){
            return this.fail(result.error,res);
        }

        const viewModel: any = {
            data: result.getValue(),
            message: 'Stop Delivered Successfully'
        }

        return this.ok(viewModel, res);

    }
    
}
