import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_gpu_label', ['label'])
export class GpuModel
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    label:string;

    @Column()
    VRAM:number;

    @Column()
    encoderCount:number;
}
