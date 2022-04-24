import { FilterableField, QueryOptions } from "@nestjs-query/query-graphql";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsPositive, Max, Min } from "class-validator";
import { CpuModel } from "../entities/cpu-model.entity";
import { GpuModel } from "../entities/gpu-model.entity";

@ObjectType('ServerModel')
@QueryOptions({ maxResultsSize: -1})
export class ServerModelDto 
{
    @FilterableField()
    @IsNotEmpty()
    label:string;

    @Field(() => Int, {description: 'Ram in MegaByte'})
    @Min(1024)
    @Max(1024 * 1024)
    RAM:number;

    @Field()
    CPUs:CpuModel[]

    @Field()
    GPUs:GpuModel[]
}
