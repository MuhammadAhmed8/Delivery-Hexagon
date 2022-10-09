import { Body, Controller, Param, Post, Put, Res } from "@nestjs/common"
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Response } from "express";
import { BaseController } from "src/lib/base/controller";
import { Result } from "src/lib/types/result";
import { AssignDriverCommand } from "../../application/commands/AssignDriverCommand";
import { DeliverToStopCommand } from "../../application/commands/DeliverToStopCommand";
import { RouteService } from "../../application/routeService"


@Controller('/route')
export class RouteController extends BaseController{

    private _routeService: RouteService;

    constructor(private readonly _commandBus: CommandBus, private readonly _queryBus: QueryBus){
        super();
        this._routeService = new RouteService();
    }

    @Put('/:id/driver')
    public async assignRouteToDriver(@Param('id') routeId: number, @Body() body: any,  @Res() res: Response){
        
        const {driverId} = body;

        const result: Result<void> = await this._commandBus.execute(new AssignDriverCommand(driverId, routeId));

        if(result.isFailure){
            return this.fail(result.error,res);
        }

        const responseDto: any = {
            data: result.getValue(),
            message: 'Route Assigned To Driver'
        }

        return this.ok(responseDto, res);

    }

    @Put('/:id/stop/:stopId/delivery')
    public async deliverToStop(@Param('id') routeId: number, @Param('stopId') stopId: number,  @Res() res: Response){
        
        const result: Result<void> = await this._commandBus.execute(new DeliverToStopCommand(stopId, routeId));

        if(result.isFailure){
            return this.fail(result.error,res);
        }

        const responseDto: any = {
            data: result.getValue(),
            message: 'Stop Delivered Successfully'
        }

        return this.ok(responseDto, res);

    }
    
}
