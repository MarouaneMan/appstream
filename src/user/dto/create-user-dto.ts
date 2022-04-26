import { FilterableField } from "@nestjs-query/query-graphql";
import { Field, GraphQLISODateTime, HideField, InputType, ObjectType } from "@nestjs/graphql";
import { Allow, IsDate, IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";
import { Match } from "../decorators/match.decorator";

@InputType()
export class CreateUserInput {

    @Field()
    @IsNotEmpty()
    firstName:string;

    @Field()
    @IsNotEmpty()
    lastName:string;

    @FilterableField()
    @IsEmail()
    email:string;

    @Field(() => GraphQLISODateTime)
    @IsDate()
    birthDate:Date

    @Field()
    @Allow()
    @MinLength(8)
    password:string;

    @Field()
    @Match('password')
    passwordConfirmation:string;
}
