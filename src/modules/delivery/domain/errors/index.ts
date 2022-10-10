import { CustomError } from "src/lib/types/error";

class DriverAlreadyAssignedError extends CustomError {
    constructor(){
        super("DRIVER IS ALREADY ASSIGNED.", 400)
    }
}

class StopNotFoundError extends CustomError {
    constructor(){
        super("Stop Does not exist.", 400)
    }
}

class StopAlreadyDeliveredError extends CustomError {
    constructor(){
        super("Stop already delivered.", 400)
    }
}

export class DomainErrors {
    public static readonly DriverAlreadyAssignedError = new DriverAlreadyAssignedError();
    public static readonly StopNotFoundError = new StopNotFoundError();
    public static readonly StopAlreadyDeliveredError = new StopAlreadyDeliveredError();
}