import { Entity } from "src/lib/base/entities/entity";

export class Driver extends Entity {

    public name: string;
    public isAssigned: boolean;
    public city: string;

    constructor(id: number, name: string, isAssigned: boolean, city: string) {
        super(id);
        this.name = name;
        this.isAssigned = isAssigned;
        this.city = city
    }

    public isAvailable(){
        return !this.isAssigned;
    }

    public validate(): void {
        
    }

}