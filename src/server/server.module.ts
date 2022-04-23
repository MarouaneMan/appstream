import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Server } from './server.entity';
import { ServerDto } from './dto/server.dto';
import { ServerService } from './server.service';
import { ServerResolver } from './server.resolver';

@Module({
  providers: [ServerResolver],

  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // Register entities with typeorm and provide query services
      imports: [NestjsQueryTypeOrmModule.forFeature([Server])],

      services: [ServerService],

      // Generate corresponding resolvers
      resolvers: [
        {
          DTOClass: ServerDto,
          EntityClass: Server,
          ServiceClass: ServerService,
        },
      ],
    }),
  ],
})
export class ServerModule {}
