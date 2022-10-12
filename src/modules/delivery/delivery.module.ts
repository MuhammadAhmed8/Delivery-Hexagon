import { Module } from "@nestjs/common";
import { RouteController } from "./adaptors/in-adaptors/web/controllers/routeController";
import { CqrsModule } from "@nestjs/cqrs";
import { RouteRespository } from "./adaptors/out-adaptors/persistence/repositories/RouteRepository";
import { DriverRespository } from "./adaptors/out-adaptors/persistence/repositories/DriverRepository";
import { RouteService } from "./application/route.service";

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
        RouteService
    ]
})
export class DeliveryModule {}