import { Post } from "@nestjs/common";
import { Driver } from "../domain❤️/entities/driver.entity";
import { Route } from "../domain❤️/entities/route.entity";
import { IDriverRepository } from "../domain❤️/ports/IDriverRepository";
import { IRouteRepository } from "../domain❤️/ports/IRouteRepository";
import { RouteRespository } from "../persistence/repositories/RouteRepository";


export class DeliveryService {

    private _routeRepository: IRouteRepository;
    private _driverRepository: IDriverRepository;

    constructor(){
        this._routeRepository = new RouteRespository();
    }
    
    public async assignDriver(routeId: number, driverId: number): Promise<void> {

        const route: Route = await this._routeRepository.findById(routeId);
        const driver: Driver = await this._driverRepository.findById(driverId);

        route.assignDriver(driver);

        // publish(new RouteAssignedEvent());


    }

}