import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
  ]

})
export class AppModule {}
