import { Entity } from "src/lib/entities/entity";

export class OrderBatch extends Entity {
    public id: number;
    private date: Date;
    
    constructor(id: number) {
        super(id)
    }

    public validate(): void {
        throw new Error("Method not implemented.");
    }

}