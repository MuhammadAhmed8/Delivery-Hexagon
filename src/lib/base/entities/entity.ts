
export abstract class Entity {

    protected _id: number;

    public get id() : number {
      return this._id;
    }


    constructor(id) {
      this._id = id;
    }
  
  
    static isEntity(entity: unknown): entity is Entity {
      return entity instanceof Entity;
    }
  
    /**
     *  Check if two entities are the same Entity. Checks using ID field.
     * @param object Entity
     */
    public equals(object?: Entity): boolean {
      if (object === null || object === undefined) {
        return false;
      }
  
      if (this === object) {
        return true;
      }
  
      if (!Entity.isEntity(object)) {
        return false;
      }
  
      return this.id ? this.id === object.id : false;
    }

    public abstract validate(): void;
  

  
  }
  