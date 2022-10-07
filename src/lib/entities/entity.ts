
export abstract class Entity {

    protected id: number;


    constructor(id) {
      this.id = id;
      this.validate();
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
  
  
    /**
     * Validate invariant
     */
    public abstract validate(): void;
  
  }
  