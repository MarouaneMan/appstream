import { CacheModule, Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerModule } from './server/server.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';

type soos = RedisClientOptions

@Module({
  imports: [
    
    CacheModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        ...configService.get('redis')
      }),
      inject: [ConfigService],
      isGlobal: true,
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      cache: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),

    GraphQLModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('graphql'),
      inject: [ConfigService],
    }),

    ServerModule,
    UserModule,
    AuthModule,
  ]
})
export class AppModule {}
