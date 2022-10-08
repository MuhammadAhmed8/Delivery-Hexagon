import { Module } from "@nestjs/common";
import { DeliveryService } from "./application/deliveryService";
import { DeliveryController } from "./web/controllers/deliveryController";

@Module({
    controllers: [DeliveryController],
    providers: [DeliveryService]
})
export class DeliveryModule {}