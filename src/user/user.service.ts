import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user-dto';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {

    constructor(
        @InjectQueryService(User)
        private readonly queryService: QueryService<User>,

        private readonly authService: AuthService
    )
    {
    }
    
    async registerUser(createUserInput:CreateUserInput) : Promise<UserDto> {
        
        const passwordHash = await this.authService.hashPlainPassword(createUserInput.password);
        
        return this.queryService.createOne({
            ...createUserInput,
            passwordHash
        })
    }
}
