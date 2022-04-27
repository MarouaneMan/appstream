import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user-dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {

    constructor(private userService:UserService) {}

    @Mutation(() => UserDto)
    createUser(@Args('createUserInput') createUserInput:CreateUserInput) : Promise<UserDto> {
        return this.userService.registerUser(createUserInput)
    }
}