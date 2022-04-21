import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ServerStatus {
    UP = "UP",
    DOWN = "DOWN",
    MAINTENANCE = "MAINTENANCE"
}

@Entity()
export class ServerEntity {

    @PrimaryGeneratedColumn()
    id:string;

    @Column({nullable: true})
    PrivateIP:string

    @Column({nullable: true})
    PublicIP:string

    @Column()
    FQDN:string

    @Column({
        type: "enum",
        enum: ServerStatus,
        default: ServerStatus.UP
    })
    Status:ServerStatus
}
