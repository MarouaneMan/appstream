import { Query, Args, Int, Mutation, ObjectType, Resolver, Field } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user-dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {

    constructor(
        private readonly userService:UserService
    ) 
    {}

    @Mutation(() => UserDto)
    createUser(@Args('createUserInput') createUserInput:CreateUserInput) : Promise<UserDto> {
        
        console.log("Create User called with the following object");
        console.log(createUserInput);
        
        return this.userService.registerUser(createUserInput)
    }
}
