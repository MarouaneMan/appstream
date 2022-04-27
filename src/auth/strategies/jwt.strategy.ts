import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthenticatedUser, JwtPayload } from '../auth.interfaces';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { InjectQueryService, QueryService } from '@nestjs-query/core';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectQueryService(User)
        private readonly userQueryService: QueryService<User>,
        configService: ConfigService,
    ) {
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: configService.get<JwtModuleOptions>('jwt').secret,
        });
    }

    async validate(payload: JwtPayload): Promise<AuthenticatedUser> {
        const {passwordHash, ...user} = await this.userQueryService.findById(payload.sub)
        return user;
    }
    
}
