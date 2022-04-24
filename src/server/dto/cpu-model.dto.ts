import { FilterableField, QueryOptions } from "@nestjs-query/query-graphql";
import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Allow, IsNotEmpty, Max, Min} from "class-validator";

@ObjectType('CpuModel')
@InputType('CreateCpuModelInput')
@QueryOptions({ maxResultsSize: -1})
export class CpuModelDto {

    @FilterableField({nullable: false})
    @IsNotEmpty()
    label:string;

    @Field(() => Int, { nullable: false })
    @IsNotEmpty()
    @Min(1)
    @Max(128)
    cores:number;

    @Field(() => Int, { defaultValue: 0})
    @Min(0)
    @Max(8)
    encoderCount:number;

    @Field(() => Boolean, { defaultValue: false})
    @Allow()
    hyperThread:boolean;
}
