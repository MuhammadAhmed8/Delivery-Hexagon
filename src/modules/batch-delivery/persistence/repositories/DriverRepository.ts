import { Driver } from "../../domain❤️/entities/driver.entity";
import { IDriverRepository } from "../../domain❤️/ports/IDriverRepository";

export class DriverRespository implements IDriverRepository {

    private fakeDb: any;

    constructor(){
        const drivers: Array<Driver> = [];
        drivers.push(new Driver(1,'Saad',false,"Karachi"));
        drivers.push(new Driver(2,'Umer',true,"Karachi"));
        
        this.fakeDb = {
            drivers
        }
        // mock database
    }


    public async findAll(): Promise<Driver[]> {

        /*
            - use typeorm/any orm to fetch and query
            - map typeorm/table entity to domain entity
            - return domain entity (not table entity)
        */

        return this.fakeDb['drivers'];
    }

    public async findById(driverId: number): Promise<Driver> {

        /*
            - use typeorm/any orm to fetch and query
            - map typeorm/table entity to domain entity
            - return domain entity (not table entity)
        */

        const driver : Driver = this.fakeDb.drivers.find((x)=>x.id === driverId);
        return driver;

    }

    public async create(): Promise<Driver> {
        const driver: Driver = new Driver(1,'Saad',false,"Karachi");
        return driver;
    }
    
}