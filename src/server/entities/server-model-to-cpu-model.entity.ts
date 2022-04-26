import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey, Unique } from "typeorm";
import { CpuModel } from "./cpu-model.entity";
import { ServerModel } from "./server-model.entity";

@Entity()
export class ServerModelToCpuModel
{
    @PrimaryGeneratedColumn()
    id:number & {__brand: "ServerModelToCpuModelId"};

    @Column()
    @Index()
    serverModelId:number;

    @Column()
    @Index()
    cpuModelId:number;

    @ManyToOne(() => ServerModel, (serverModel) => serverModel.serverModelToCpuModels)
    serverModel:ServerModel;

    @ManyToOne(() => CpuModel, (cpuModel) => cpuModel.serverModelToCpuModels)
    cpuModel:CpuModel;
}
