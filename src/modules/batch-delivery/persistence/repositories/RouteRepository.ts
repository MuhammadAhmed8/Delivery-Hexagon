import { Route } from "../../domain❤️/entities/route.entity";
import { IRouteRepository } from "../../domain❤️/ports/IRouteRepository";
import { RouteSpecification } from "../../domain❤️/value-objects/routeSpecification";

export class RouteRespository implements IRouteRepository {

    private dbContext: any;

    constructor(){

        // mock database
    }


    public async findAll(): Promise<Route[]> {

        /*
            - use typeorm/any orm to fetch and query
            - map typeorm/table entity to domain entity
            - return domain entity (not table entity)
        */

        const routes : Route[] = [
            new Route(1,'TA121','Route 1'),
            new Route(2,'TA122', 'Route 2'),
        ]

        return routes;
    }

    public async findById(): Promise<Route> {

        /*
            - use typeorm/any orm to fetch and query
            - map typeorm/table entity to domain entity
            - return domain entity (not table entity)
        */

        const route : Route = new Route(1,'TA121','Route 1');
        return route;

    }

    public async create(): Promise<Route> {
        const route: Route = new Route(1,'TA121','Route 1');
        return route;
    }
    
}