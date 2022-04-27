import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { LoginInputDto } from './dto/login-input.dto';
import { User } from 'src/user/user.entity';

interface RequestWithUser extends Request {
    user?:User
}

@Resolver()
export class AuthResolver {

    constructor(private authService:AuthService){}

    @Mutation(() => LoginResponseDto)
    @UseGuards(GqlAuthGuard)
    login(
        @Args('loginInputDto') _:LoginInputDto,
        @Context('req') req:RequestWithUser
    )
    {
        return this.authService.login(req.user)
    }
}
