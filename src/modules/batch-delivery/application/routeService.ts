import { Post } from "@nestjs/common";
import { Result } from "src/lib/types/result";
import { Driver } from "../domain❤️/entities/driver.entity";
import { Route } from "../domain❤️/entities/route.entity";
import { IDriverRepository } from "../domain❤️/ports/IDriverRepository";
import { IRouteRepository } from "../domain❤️/ports/IRouteRepository";
import { DriverRespository } from "../persistence/repositories/DriverRepository";
import { RouteRespository } from "../persistence/repositories/RouteRepository";


export class RouteService {

    private _routeRepository: IRouteRepository;
    private _driverRepository: IDriverRepository;

    constructor(){
        this._routeRepository = new RouteRespository();
        this._driverRepository = new DriverRespository();
    }
    
    public async assignDriver(routeId: number, driverId: number): Promise<Result<void>> {

        const route: Route = await this._routeRepository.findById(routeId);
        const driver: Driver = await this._driverRepository.findById(driverId);

        console.log(driver,"my driver");

        const result: Result<void> = route.assignDriver(driver);

        return result;

        // publish(new RouteAssignedEvent());


    }

}