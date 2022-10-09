import { Body, Controller, Param, Post, Put, Res } from "@nestjs/common"
import { Response } from "express";
import { BaseController } from "src/lib/base/controller";
import { Result } from "src/lib/types/result";
import { RouteService } from "../../application/routeService"


@Controller('/route')
export class RouteController extends BaseController{

    private _routeService: RouteService;

    constructor(){
        super();
        this._routeService = new RouteService();
    }

    @Put('/:id/driver')
    public async assignRouteToDriver(@Param('id') routeId: number, @Body() body: any,  @Res() res: Response){
        
        const {driverId} = body;

        const result: Result<void> = await this._routeService.assignDriver(routeId, driverId);

        if(result.isFailure){
            return this.fail(result.error,res);
        }

        const responseDto: any = {
            data: result.getValue(),
            message: 'Route Assigned To Driver'
        }

        return this.ok(responseDto, res);

    }
    
}
