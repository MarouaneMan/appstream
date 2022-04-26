import { FilterableField } from "@nestjs-query/query-graphql";
import { Field, GraphQLISODateTime, HideField, InputType, ObjectType } from "@nestjs/graphql";
import { Allow, IsDate, IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";
import { Match } from "../decorators/match.decorator";

@ObjectType('User')
export class UserDto {
    
    @Field()
    id:string;

    @Field()
    firstName:string;

    @Field()
    lastName:string;

    @FilterableField()
    email:string;

    @Field(() => GraphQLISODateTime)
    birthDate:Date
    
}
