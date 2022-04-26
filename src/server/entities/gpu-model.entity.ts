import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_gpu_label', ['label'])
export class GpuModel
{
    @PrimaryGeneratedColumn()
    id:number & { __brand : "GpuModelID"};

    @Column()
    label:string;

    @Column()
    vram:number;

    @Column()
    encoderCount:number;
}
