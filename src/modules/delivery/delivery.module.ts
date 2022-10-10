import { Module } from "@nestjs/common";
import { RouteController } from "./web/controllers/routeController";
import { CommandHandlers } from "./application/commands/handlers";
import { CqrsModule } from "@nestjs/cqrs";
import { RouteRespository } from "./persistence/repositories/RouteRepository";
import { DriverRespository } from "./persistence/repositories/DriverRepository";

@Module({
    imports: [CqrsModule],
    controllers: [RouteController],
    providers: [
        {
            provide: 'IRouteRepository',
            useClass: RouteRespository
        },
        {
            provide: 'IDriverRespository',
            useClass: DriverRespository
        },
        ...CommandHandlers
    ]
})
export class DeliveryModule {}