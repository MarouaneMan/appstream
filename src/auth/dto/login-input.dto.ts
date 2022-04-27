import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsEmail, MinLength } from "class-validator";

@InputType()
export class LoginInputDto {

    @Field()
    @IsEmail()
    email:string;


    @Field()
    @MinLength(8)
    password:string;
}