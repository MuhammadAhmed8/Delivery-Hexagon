import { Driver } from "../entities/driver.entity";

/*
    Repository shouldn't be correlated with tables. Each domain aggregate
    should have one repository.
*/

export interface IDriverRepository{

    findAll(): Promise<Driver[]>;

    findById(): Promise<Driver>;

    create(): Promise<Driver>;



}