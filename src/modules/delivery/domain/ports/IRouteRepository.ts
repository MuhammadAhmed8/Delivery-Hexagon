import { Route } from "../entities/route.entity";

/*
    Repository shouldn't be correlated with tables. Each domain aggregate
    should have one repository.
*/

export interface IRouteRepository{

    findAll(): Promise<Route[]>;

    findById(id: number): Promise<Route>;

    create(): Promise<Route>;



}