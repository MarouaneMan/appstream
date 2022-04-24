import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_cpu_label', ['label'])
export class CpuModel {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: false})
    label!:string;

    @Column()
    cores:number;

    @Column({default: 0})
    encoderCount:number;

    @Column({default: false})
    hyperthread:boolean;
}
