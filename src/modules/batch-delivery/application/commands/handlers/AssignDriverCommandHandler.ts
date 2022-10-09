import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/lib/types/result';
import { Driver } from 'src/modules/batch-delivery/domain❤️/entities/driver.entity';
import { Route } from 'src/modules/batch-delivery/domain❤️/entities/route.entity';
import { IDriverRepository } from 'src/modules/batch-delivery/domain❤️/ports/IDriverRepository';
import { IRouteRepository } from 'src/modules/batch-delivery/domain❤️/ports/IRouteRepository';
import { DriverRespository } from 'src/modules/batch-delivery/persistence/repositories/DriverRepository';
import { RouteRespository } from 'src/modules/batch-delivery/persistence/repositories/RouteRepository';
import { AssignDriverCommand } from '../AssignDriverCommand';

@CommandHandler(AssignDriverCommand)
export class AssignDriverCommandHandler implements ICommandHandler<AssignDriverCommand> {
  
  constructor(
    @Inject('IRouteRepository') private readonly _routeRepository: IRouteRepository,
    @Inject('IDriverRespository') private _driverRepository: IDriverRepository
  ) {}

  async execute(command: AssignDriverCommand) {
    
    console.log("Assign Driver Command Handler Executing!")
    
    const { routeId, driverId } = command;
    
    const route: Route = await this._routeRepository.findById(routeId);
    const driver: Driver = await this._driverRepository.findById(driverId);

    const result: Result<void> = route.assignDriver(driver);

    return result;

  }
}