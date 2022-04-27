import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { LoginResponseDto } from './dto/login-response.dto';
import { JwtService } from '@nestjs/jwt';

/**
 * Salt rounds used to generate bcrypt hash
 */
const BCRYPT_SALT_ROUND = 10

@Injectable()
export class AuthService {

    constructor(
        @InjectQueryService(User)
        private readonly userQueryService:QueryService<User>,
        
        private jwtService:JwtService
    )
    {
    }

    async login(user:User) : Promise<LoginResponseDto> {
        
        // Make jwt payload
        const payload = {
            sub: user.id,
            email : user.email,
        };
        
        // Sign payload using global jwt config
        const accessToken = await this.jwtService.signAsync(payload)
        
        return { accessToken }
    }

    async validateUser(email:string, password:string) : Promise<User | null>
    {
        // Query user by its email address
        const [user] = await this.userQueryService.query({
            filter: {
                email: { eq: email}
            }
        })
        
        // Hash input password and compare it to the user passwordHash
        if (user)
        {
            const isSame = await this.compareHashToPlainPassword(
                password,
                user.passwordHash
            )
            user.passwordHash = null;
            if (isSame) return user;
        }
        return null;
    }

    async hashPlainPassword(plainPassword:string) : Promise<string>
    {
        return bcrypt.hash(plainPassword, BCRYPT_SALT_ROUND);
    }

    async compareHashToPlainPassword(plainPassword:string, hash:string) : Promise<boolean>
    {
        return bcrypt.compare(plainPassword, hash)
    }
}
