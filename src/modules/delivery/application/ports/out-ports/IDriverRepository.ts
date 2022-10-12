import { Driver } from "../../domain/entities/driver.entity";

/*
    Repository shouldn't be correlated with tables. Each domain aggregate
    should have one repository.
*/

export interface IDriverRepository{

    findAll(): Promise<Driver[]>;

    findById(id: number): Promise<Driver>;

    create(): Promise<Driver>;


}