import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Server } from './entities/server.entity';
import { ServerDto } from './dto/server.dto';
import { ServerService } from './server.service';
import { ServerResolver } from './server.resolver';
import { ServerModel } from './entities/server-model.entity';
import { CpuModel } from './entities/cpu-model.entity';
import { GpuModel } from './entities/gpu-model.entity';
import { CpuModelDto } from './dto/cpu-model.dto';
import { GpuModelDto } from './dto/gpu-model.dto';

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
