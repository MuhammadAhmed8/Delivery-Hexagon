import { Post } from "@nestjs/common";
import { IRouteRepository } from "../domain❤️/ports/IRouteRepository";
import { RouteRespository } from "../persistence/repositories/RouteRepository";


export class DeliveryService {

    private _routeRepository: IRouteRepository;

    constructor(){
        this._routeRepository = new RouteRespository();
    }
    
    assignRoute() {
        const Route = this.RouteRespository.getRoute();

        Route.assignRoute();

        publish(new RouteAssignedEvent());
    }

}