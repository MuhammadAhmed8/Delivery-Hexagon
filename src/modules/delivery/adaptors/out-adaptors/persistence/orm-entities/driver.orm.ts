import { TypeormEntityBase } from "src/lib/base/entity.orm";
import { Column, OneToMany } from "typeorm";
import { Entity } from "../../../../../../lib/base/entities/entity";
import { Route } from "../../../../domain/entities/route.entity";
import { RouteOrmEntity } from "./route.orm";

export class DriverOrmEntity extends TypeormEntityBase{

    @Column()
    name: string;

    @Column()
    isAssigned: boolean;

    @Column()
    city: string;

    @OneToMany(()=>RouteOrmEntity, (route)=>route.driver)
    routes: RouteOrmEntity[]

}