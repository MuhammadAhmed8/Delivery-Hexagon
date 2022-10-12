import { TypeormEntityBase } from 'src/lib/base/entity.orm';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { RouteStatus } from '../../../../domain/entities/route.entity';
import { DriverOrmEntity } from './driver.orm';
import { StopOrmEntity } from './stop.orm';

@Entity('routes')
export class RouteOrmEntity extends TypeormEntityBase{

    @Column({ type: 'jsonb' })
    origin: object;
     
    @Column()
    trackingId: string;
    
    @Column()
    title: string;
    
    @Column()
    status: RouteStatus;

    @ManyToOne(()=>DriverOrmEntity, (driver) => driver.routes)
    driver: DriverOrmEntity;

    @OneToMany(()=>StopOrmEntity, stop => stop.route)
    stops: StopOrmEntity[];
}
    