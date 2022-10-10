import { Body, Controller, Param, Post, Put, Res } from "@nestjs/common"
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Response } from "express";
import { BaseController } from "src/lib/base/controller";
import { Result } from "src/lib/types/result";
import { AssignDriverCommand } from "../../application/commands/AssignDriverCommand";
import { DeliverToStopCommand } from "../../application/commands/DeliverToStopCommand";


@Controller('/route')
export class RouteController extends BaseController{

    constructor(private readonly _commandBus: CommandBus, private readonly _queryBus: QueryBus){
        super();
    }

    @Put('/:id/driver')
    public async assignRouteToDriver(@Param('id') routeId: number, @Body() body: any,  @Res() res: Response){
        
        const {driverId} = body;

        const result: Result<void> = await this._commandBus.execute(new AssignDriverCommand(driverId, routeId));

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
        
        const result: Result<void> = await this._commandBus.execute(new DeliverToStopCommand(stopId, routeId));

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
