import { Result } from "src/lib/types/result";
import { Route } from "../../domain/entities/route.entity";

export interface IRouteService {

    assignDriver(routeId: number, driverId: number): Promise<Result<void>>;

    deliverToStop(stopId: number, routeId: number): Promise<Result<void>>;

    findRoute(routeId: number): Promise<Route>; 

}