import { Module } from "@nestjs/common";
import { RouteService } from "./application/routeService";
import { RouteController } from "./web/controllers/routeController";

@Module({
    controllers: [RouteController],
    providers: [RouteService]
})
export class DeliveryModule {}