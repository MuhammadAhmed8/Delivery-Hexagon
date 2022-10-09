export class DeliverToStopCommand {
    constructor(
        public readonly stopId: number,
        public readonly routeId: number,
    ) {}
}