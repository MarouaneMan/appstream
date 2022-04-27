import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from 'src/user/user.entity';
import { AuthenticatedUser } from '../auth.interfaces';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService)
    {
        super({
            usernameField: 'email'
        });
    }

    async validate(email: string, password: string): Promise<AuthenticatedUser> {
        const user = this.authService.validateUser(email, password)
         if (!user)
             throw new UnauthorizedException();
        return user;
    }
}
