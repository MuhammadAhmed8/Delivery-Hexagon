import { Test, TestingModule } from "@nestjs/testing";
import { Driver } from "src/modules/delivery/domain/entities/driver.entity";
import { Route } from "src/modules/delivery/domain/entities/route.entity";
import { Stop, StopStatus } from "src/modules/delivery/domain/entities/stop";


describe('Routes Test', () => {
  
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
      }).compile();
  
    });

    describe('ASSIGN A DRIVER TO ROUTE', ()=>{

        let route: Route;
        let driver: Driver;

        beforeEach(async () => {
            route = new Route(1,'TA121','Route 1', [new Stop(1), new Stop(2)]);
            driver = new Driver(1,"Ahmed",false,"Karachi");
          });

        it('should assign a driver if driver is available', () => {
        
            route.assignDriver(driver);
    
            expect(route.driver).toBe(driver);
        
        });

        it('should make driver unavailable after assignment to route', () => {
    
            route.assignDriver(driver);
            expect(route.driver.isAvailable()).toBe(false);
        
        });

        it("should mark stop status to 'delivered' after delivery",()=>{
            route.deliverToStop(1);
            route.findStop(1).status == StopStatus.DELIVERED

        })

        
    })
})