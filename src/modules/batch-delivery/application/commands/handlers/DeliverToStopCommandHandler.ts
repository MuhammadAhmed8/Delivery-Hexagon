import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/lib/types/result';
import { Driver } from 'src/modules/batch-delivery/domain❤️/entities/driver.entity';
import { Route } from 'src/modules/batch-delivery/domain❤️/entities/route.entity';
import { IDriverRepository } from 'src/modules/batch-delivery/domain❤️/ports/IDriverRepository';
import { IRouteRepository } from 'src/modules/batch-delivery/domain❤️/ports/IRouteRepository';
import { DriverRespository } from 'src/modules/batch-delivery/persistence/repositories/DriverRepository';
import { RouteRespository } from 'src/modules/batch-delivery/persistence/repositories/RouteRepository';
import { DeliverToStopCommand } from '../DeliverToStopCommand';

@CommandHandler(DeliverToStopCommand)
export class DeliverToStopCommandHandler implements ICommandHandler<DeliverToStopCommand> {
  
    private readonly _routeRepository: IRouteRepository;

constructor(
    
  ) {
    this._routeRepository = new RouteRespository();
  }

  async execute(command: DeliverToStopCommand): Promise<Result<void>> {
    
    console.log("Deliver To Stop Command Handler Executing!");

    const {stopId, routeId} = command;
    
    const route: Route = await this._routeRepository.findById(routeId);
    const result: Result<void> = route.deliverToStop(stopId);

    return result;

  }
}