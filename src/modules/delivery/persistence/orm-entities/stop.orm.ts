import { TypeormEntityBase } from 'src/lib/base/entity.orm';
import { Column, Entity } from 'typeorm';
import { Driver } from '../../domain/entities/driver.entity';
import { RouteStatus } from '../../domain/entities/route.entity';

@Entity('stops')
export class StopOrmEntity extends TypeormEntityBase{

    @Column({ type: 'jsonb' })
    location: object;

    @Column()
    customerId: number;

    @Column()
    status: number;

}
    