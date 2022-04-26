import { FilterableField, QueryOptions } from '@nestjs-query/query-graphql';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsFQDN, IsIP, IsNotEmpty, IsOptional } from 'class-validator';
import { ServerStatus } from '../enums';

@ObjectType('Server')
@InputType('CreateServerInput')
@QueryOptions({ maxResultsSize: -1 })
export class ServerDto {
  
  @Field()
  @IsNotEmpty()
  hostname: string;

  @FilterableField({ nullable: true })
  @IsIP('6')
  @IsOptional()
  privateIP?: string;

  @Field({ nullable: true })
  @IsIP('4')
  @IsOptional()
  publicIP?: string;

  @Field()
  @IsFQDN()
  fqdn: string;

  @Field((type) => ServerStatus)
  status: ServerStatus;
}
