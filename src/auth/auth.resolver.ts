import { Query, Args, Context, Field, Mutation, ObjectType, Resolver, Int } from '@nestjs/graphql';
import { Logger, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { LoginInputDto } from './dto/login-input.dto';
import { AuthenticatedUser, RequestWithAuthenticatedUser } from './auth.interfaces';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';

@Resolver()
export class AuthResolver {

    constructor(private authService:AuthService){}

    @Mutation(() => LoginResponseDto)
    @UseGuards(GqlAuthGuard)
    login(
        @Args('loginInputDto') _:LoginInputDto,
        @Context('req') req:RequestWithAuthenticatedUser
    )
    {
        return this.authService.login(req.user)
    }
    
    @Query(() => Int)
    @UseGuards(JwtAuthGuard)
    testProtectedEndPoint(
        // This is a cleaner way to get the user from the current context
        @CurrentUser() user:AuthenticatedUser
    ) : number {
        Logger.log("User object in the protected route", user, "AuthResolver")
        return 6666
    }
}
