import { Route } from "../../domain/entities/route.entity";
import { RouteOrmEntity } from "../orm-entities/route.orm";

export class RouteOrmMapper{

    protected toOrm(entity: Route): RouteOrmEntity {    
        return new RouteOrmEntity();
      }
    
      protected toDomain(ormEntity: RouteOrmEntity): Route {
        const route: Route = new Route(ormEntity.id, ormEntity.trackingId,ormEntity.title, ormEntity.stops);
        return route;
      }

}