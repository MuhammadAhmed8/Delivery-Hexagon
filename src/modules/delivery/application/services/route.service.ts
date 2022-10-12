import { Inject } from "@nestjs/common";
import { Result } from "src/lib/types/result";
import { Driver } from "../../domain/entities/driver.entity";
import { Route } from "../../domain/entities/route.entity";
import { IRouteService } from "../in-ports/IRoute.service";
import { IDriverRepository } from "../out-ports/IDriverRepository";
import { IRouteRepository } from "../out-ports/IRouteRepository";


/* THIS IS AN APPLICATION SERVICE - SHOULD NOT CONTAIN BUSINESS LOGIC*/
export class RouteService implements IRouteService {
    
    constructor(
        @Inject('IRouteRepository') private readonly _routeRepository: IRouteRepository,
        @Inject('IDriverRespository') private _driverRepository: IDriverRepository
    ) {}

        
    public async assignDriver(routeId: number, driverId: number){
    
        const route: Route = await this._routeRepository.findById(routeId);
        const driver: Driver = await this._driverRepository.findById(driverId);

        // moved domain logic inside route entity
        const result: Result<void> = route.assignDriver(driver);

        await this._routeRepository.save(route);

        return result;

    }

    public async deliverToStop(stopId: number, routeId: number){
        
        const route: Route = await this._routeRepository.findById(routeId);

        // moved domain logic inside route entity
        const result: Result<void> = route.deliverToStop(stopId);

        await this._routeRepository.save(route);

        return result;

    }

    public async findRoute(routeId: number){
        const route: Route = await this._routeRepository.findById(routeId);

        return route;
    }

}