import { Post } from "@nestjs/common";

class DeliveryController{

    @Post('/')
    this.deliverService.assignRoute(vv)
}

class DeliveryService {
  
    
    assignRoute() {
        const Route = this.RouteRespository.getRoute();

        Route.assignRoute();

        publish(new RouteAssignedEvent());
    }

}