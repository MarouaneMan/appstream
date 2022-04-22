import { FilterableField, QueryOptions } from "@nestjs-query/query-graphql";
import { Field, ObjectType} from "@nestjs/graphql";
import { IsFQDN, IsIP, IsNotEmpty, IsOptional, ValidateIf } from "class-validator";
import { ServerStatus } from "../enums/server-status.enum";

@ObjectType()
@QueryOptions({ maxResultsSize: -1 })
export class ServerDto {

    @Field()
    @IsNotEmpty()
    hostname:string;

    @FilterableField({nullable: true})
    @IsIP('6')
    @IsOptional()
    privateIP?:string;

    @Field({nullable: true})
    @IsIP('4')
    @IsOptional()
    publicIP?:string;

    @Field()
    @IsFQDN()
    FQDN:string;

    @Field(type => ServerStatus)
    status:ServerStatus;
}
