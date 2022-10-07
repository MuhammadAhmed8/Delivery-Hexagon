import { Entity } from "src/lib/entities/entity";

export class Driver extends Entity {

    public name: string;
    public isAssigned: boolean; 
    public city: string; 

    constructor(id: number){
        super(id);
    }

    public validate(): void {
        throw new Error("Method not implemented.");
    }

}