import { Entity } from "src/lib/entities/entity";

export class OrderBatch extends Entity {
    private date: Date;
    
    constructor(id: number) {
        super(id)
    }

    public validate(): void {}

}