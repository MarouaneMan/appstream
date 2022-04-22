import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Server } from './entities/server.entity';
import { ServerDto } from './dto/server.dto';

@Module({

  imports: [

    NestjsQueryGraphQLModule.forFeature({

      // Register entities with typeorm and provide query services
      imports: [NestjsQueryTypeOrmModule.forFeature([Server])],
      
      // Generate corresponding resolvers
      resolvers: [{ DTOClass: ServerDto, EntityClass: Server }],
      
    })

  ]
})
export class ServerModule {}
