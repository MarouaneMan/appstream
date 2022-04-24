import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { CpuModel, GpuModel, Server, ServerModel } from './entities';
import { ServerService } from './server.service';
import { ServerResolver } from './server.resolver';
import { CpuModelDto, GpuModelDto, ServerDto } from './dto';

const entities = [Server, ServerModel, CpuModel, GpuModel];

@Module({
  providers: [ServerResolver],

  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // Register entities with typeorm and provide query services
      imports: [NestjsQueryTypeOrmModule.forFeature(entities)],

      services: [ServerService],

      // Generate corresponding resolvers
      resolvers: [
        {
          DTOClass: ServerDto,
          EntityClass: Server,
          ServiceClass: ServerService,
          CreateDTOClass: ServerDto,
        },
        {
          DTOClass: CpuModelDto,
          EntityClass: CpuModel,
          CreateDTOClass: CpuModelDto,
        },
        {
          DTOClass: GpuModelDto,
          EntityClass: GpuModel,
          CreateDTOClass: GpuModelDto,
        },
      ],
    }),
  ],
})
export class ServerModule {}
