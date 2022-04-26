import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_email', ['email'])
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id:string & { __brand : "UserId" };

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    email:string;

    @Column()
    passwordHash:string;

    @Column({ type : 'date'})
    birthDate:Date;

    @Column({ default: true })
    enabled:boolean;
}
