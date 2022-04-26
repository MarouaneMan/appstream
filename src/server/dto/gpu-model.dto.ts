import { FilterableField, QueryOptions } from "@nestjs-query/query-graphql";
import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, Max, Min } from "class-validator";

@ObjectType('GpuModel')
@InputType('CreateGpuModelInput')
@QueryOptions({ maxResultsSize: -1})
export class GpuModelDto {

    @FilterableField()
    @IsNotEmpty()
    label:string;

    @Field(() => Int, { description: 'Video ram in MegaBytes'})
    @Min(1024)
    @Max(1024 * 1024)
    vram:number;

    @Field(() => Int)
    @Min(0)
    @Max(16)
    encoderCount:number;
}
