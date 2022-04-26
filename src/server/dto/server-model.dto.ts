import { CursorConnection, FilterableField, QueryOptions, UnPagedRelation } from "@nestjs-query/query-graphql";
import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, Max, Min } from "class-validator";
import { CpuModelDto } from "./cpu-model.dto";
import { GpuModelDto } from "./gpu-model.dto";
import { ServerModelToCpuModelDto } from "./server-model-to-cpu-model.dto";

@ObjectType('ServerModel')
@InputType('CreateServerModelInput')
@UnPagedRelation('serverModelToCpuModel', () => ServerModelToCpuModelDto)
@CursorConnection('gpu', () => GpuModelDto)
@QueryOptions({ maxResultsSize: -1})
export class ServerModelDto 
{
    @FilterableField()
    @IsNotEmpty()
    label:string;

    @Field(() => Int, {description: 'Ram in MegaByte'})
    @Min(1024)
    @Max(1024 * 1024)
    ram:number;
}
