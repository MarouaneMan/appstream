import { FilterableField, QueryOptions, Relation} from "@nestjs-query/query-graphql";
import { InputType, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { CpuModelDto } from "./cpu-model.dto";

@ObjectType('ServerModelToCpuModel')
@InputType('CreateServerModelToCpuModelInput')
@Relation('cpuModel', () => CpuModelDto, { disableRemove: true })
@QueryOptions({ maxResultsSize: -1})
export class ServerModelToCpuModelDto
{
    @FilterableField()
    @IsPositive()
    cpuModelId:number;

    @FilterableField()
    @IsPositive()
    serverModelId:number;
}
