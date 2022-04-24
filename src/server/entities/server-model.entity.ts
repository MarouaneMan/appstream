import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { CpuModel } from "./cpu-model.entity";
import { GpuModel } from "./gpu-model.entity";

@Entity()
@Unique('unique_server_label', ['label'])
export class ServerModel
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    label:string;

    @Column()
    RAM:number;

    @ManyToMany(() => CpuModel)
    @JoinTable({name : 'server_model_cpus'})
    CPUs:CpuModel[]

    @ManyToMany(() => GpuModel)
    @JoinTable({name : 'server_model_gpus'})
    GPUs:GpuModel[]
}
