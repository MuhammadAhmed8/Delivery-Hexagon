import { Module } from "@nestjs/common";
import { RouteService } from "./application/routeService";
import { RouteController } from "./web/controllers/routeController";
import { CommandHandlers } from "./application/commands/handlers";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
    imports: [CqrsModule],
    controllers: [RouteController],
    providers: [...CommandHandlers]
})
export class DeliveryModule {}