import { Route } from "../../../../domain/entities/route.entity";
import { Stop } from "../../../../domain/entities/stop";
import { IRouteRepository } from "../../../../application/out-ports/IRouteRepository";

export class RouteRespository implements IRouteRepository {

    private fakeDb: any;

    constructor(){

        // mock database
        const routes: Array<Route> = [];
        routes.push(new Route(1,'TA121','Route 1', [new Stop(1), new Stop(2)]));
        routes.push(new Route(2,'TA122', 'Route 2', [new Stop(3), new Stop(4)]));
        
        this.fakeDb = {
            routes
        }
    }


    public async findAll(): Promise<Route[]> {

        /*
            - use typeorm/any orm to fetch and query
            - map typeorm/table entity to domain entity
            - return domain entity (not table entity)
        */

        return this.fakeDb.routes;
    }

    public async findById(routeId: number): Promise<Route> {

        /*
            - use typeorm/any orm to fetch and query
            - map typeorm/table entity to domain entity
            - return domain entity (not table entity)
        */

        const route : Route = this.fakeDb.routes.find((x)=>x.id == routeId);

        return route;
    }

    public async create(): Promise<Route> {
        const route: Route = new Route(1,'TA121','Route 1', [new Stop(1), new Stop(2)]);
        return route;
    }
    
}