import { TypeormEntityBase } from 'src/lib/base/entity.orm';
import { Column, Entity } from 'typeorm';
import { Driver } from '../../domain/entities/driver.entity';
import { RouteStatus } from '../../domain/entities/route.entity';
import { Stop } from '../../domain/entities/stop';

@Entity('routes')
export class RouteOrmEntity extends TypeormEntityBase{

    @Column({ type: 'jsonb' })
    origin: object;
     
    @Column()
    trackingId: string;
    
    @Column()
    title: string;
    
    @Column()
    stops: Stop[];
    
    @Column()
    status: RouteStatus;

    @Column()
    driver: Driver;
}
    