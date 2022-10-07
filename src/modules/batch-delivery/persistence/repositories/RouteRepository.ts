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
            new Route(1,'TA121', new RouteSpecification()),
            new Route(2,'TA122', new RouteSpecification()),
        ]

        return routes;
    }

    public async findById(): Promise<Route> {

        /*
            - use typeorm/any orm to fetch and query
            - map typeorm/table entity to domain entity
            - return domain entity (not table entity)
        */

        const route : Route = new Route(1,'TA121', new RouteSpecification());
        return route;

    }

    public create(): Promise<Route> {
        const route = new Route(1,'TA121', new RouteSpecification());
        throw new Error("Method not implemented.");
    }
    
}