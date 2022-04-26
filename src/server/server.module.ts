import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { CpuModel, GpuModel, Server, ServerModel, ServerModelToCpuModel } from './entities';
import { CpuModelDto, GpuModelDto, ServerDto, ServerModelDto, ServerModelToCpuModelDto} from './dto';
import { ServerService } from './server.service';
import { ServerResolver } from './server.resolver';

const entities = [Server, ServerModel, ServerModelToCpuModel, CpuModel, GpuModel];

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
        {
          DTOClass: ServerModelDto,
          EntityClass: ServerModel,
          CreateDTOClass: ServerModelDto,
        },
        {
          DTOClass: ServerModelToCpuModelDto,
          EntityClass: ServerModelToCpuModel,
          CreateDTOClass: ServerModelToCpuModelDto,
        },
      ],
    }),
  ],
})
export class ServerModule {}
