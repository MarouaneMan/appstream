import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { CpuModel } from "./cpu-model.entity";
import { GpuModel } from "./gpu-model.entity";
import { ServerModelToCpuModel } from "./server-model-to-cpu-model.entity";

@Entity()
@Unique('unique_server_label', ['label'])
export class ServerModel
{
    @PrimaryGeneratedColumn()
    id:number & { __brand : "ServerModelId"};

    @Column()
    label:string;

    @Column()
    ram:number;

    @OneToMany(() => ServerModelToCpuModel, (serverModelToCpuModel) => serverModelToCpuModel.serverModel)
    serverModelToCpuModels:ServerModelToCpuModel[]
    
    @ManyToMany(() => GpuModel)
    @JoinTable({name : 'server_model_gpus'})
    gpus:GpuModel[]
}
