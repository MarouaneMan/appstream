import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerModule } from './server/server.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config';

@Module({
  imports: [

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
  ],
})
export class AppModule {}
