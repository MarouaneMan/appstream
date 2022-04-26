import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ServerModelToCpuModel } from "./server-model-to-cpu-model.entity";

@Entity()
@Unique('unique_cpu_label', ['label'])
export class CpuModel {

    @PrimaryGeneratedColumn()
    id:number & { __brand : "CpuModelID"};

    @Column({nullable: false})
    label!:string;

    @Column()
    cores:number;

    @Column({default: 0})
    encoderCount:number;

    @Column({default: false})
    hyperthread:boolean;

    @OneToMany(() => ServerModelToCpuModel, (serverModelToCpuModel) => serverModelToCpuModel.cpuModel)
    serverModelToCpuModels:ServerModelToCpuModel[]
}
