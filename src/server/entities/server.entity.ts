import {
  Check,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ServerStatus } from '../enums';

@Entity()
@Unique('unique_hostname', ['hostname'])
export class Server {
  
  @PrimaryGeneratedColumn('uuid')
  id: string & { __brand: 'ServerID' };

  @Column()
  hostname: string;

  @Column({
    type: 'inet',
    nullable: true,
  })
  @Check('ipv6', 'family(private_ip) = 6')
  privateIP?: string;

  @Column({
    type: 'inet',
    nullable: true,
  })
  @Check('ipv4', 'family(public_ip) = 4')
  publicIP?: string;

  @Column({ unique: true })
  fqdn: string;

  @Column({
    type: 'enum',
    enum: ServerStatus,
    default: ServerStatus.UP,
  })
  status: ServerStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
