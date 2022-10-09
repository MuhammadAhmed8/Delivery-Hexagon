import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/lib/types/result';
import { Route } from 'src/modules/batch-delivery/domain❤️/entities/route.entity';
import { IRouteRepository } from 'src/modules/batch-delivery/domain❤️/ports/IRouteRepository';
import { DeliverToStopCommand } from '../DeliverToStopCommand';

@CommandHandler(DeliverToStopCommand)
export class DeliverToStopCommandHandler implements ICommandHandler<DeliverToStopCommand> {
  
    constructor(@Inject('IRouteRepository') private readonly _routeRepository: IRouteRepository) {}

    async execute(command: DeliverToStopCommand): Promise<Result<void>> {
        
        console.log("Deliver To Stop Command Handler Executing!");

        const {stopId, routeId} = command;
        
        const route: Route = await this._routeRepository.findById(routeId);
        const result: Result<void> = route.deliverToStop(stopId);

        return result;

    }

}