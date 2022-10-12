import { TypeormEntityBase } from 'src/lib/base/entity.orm';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Driver } from '../../../../domain/entities/driver.entity';
import { Route, RouteStatus } from '../../../../domain/entities/route.entity';
import { RouteOrmEntity } from './route.orm';

@Entity('stops')
export class StopOrmEntity extends TypeormEntityBase{

    @Column({ type: 'jsonb' })
    location: object;

    @Column()
    customerId: number;

    @Column()
    status: number;

    @ManyToOne(()=>RouteOrmEntity, (route)=>route.stops)
    route: RouteOrmEntity;

}
    