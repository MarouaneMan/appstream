import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerModule } from './server/server.module';
import OrmConfig from './ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    
    TypeOrmModule.forRoot(OrmConfig),

    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),

    ServerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
