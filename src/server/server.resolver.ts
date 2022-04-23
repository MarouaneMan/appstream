import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { ServerDto } from './dto/server.dto';
import { ServerService } from './server.service';

@Resolver(() => ServerDto)
export class ServerResolver {
  constructor(readonly service: ServerService) {}

  @Mutation(() => ServerDto)
  restoreOneServer(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<ServerDto> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyServers(
    @Args('input', { type: () => FilterType(ServerDto) })
    filter: Filter<ServerDto>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
