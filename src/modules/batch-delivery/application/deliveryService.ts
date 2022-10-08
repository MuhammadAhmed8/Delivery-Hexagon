import { Post } from "@nestjs/common";
import { Driver } from "../domain❤️/entities/driver.entity";
import { IRouteRepository } from "../domain❤️/ports/IRouteRepository";
import { RouteRespository } from "../persistence/repositories/RouteRepository";


export class DeliveryService {

    private _routeRepository: IRouteRepository;
    private _driverRepository: IDriverRepository;

    constructor(){
        this._routeRepository = new RouteRespository();
    }
    
    assignDriver(routeId: number, driverId: number) {

        const Route = this._routeRepository.findById();
        const driver: Driver = this._driverRepository();

        Route.assignRoute();

        // publish(new RouteAssignedEvent());


    }

}