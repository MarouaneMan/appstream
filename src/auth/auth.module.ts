import { CacheModule, forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({

  imports: [

    forwardRef(() => UserModule),

    PassportModule.register({
      session: true
    }),

    JwtModule.registerAsync({
      useFactory: (config:ConfigService) => config.get('jwt'),
      inject: [ConfigService],
    })
  ],

  providers: [
    AuthService, 
    AuthResolver, 
    LocalStrategy, 
    JwtStrategy
    ],

  exports : [AuthService]
})
export class AuthModule {}