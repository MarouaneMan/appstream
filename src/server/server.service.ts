import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Server } from './entities/server.entity';

@QueryService(Server)
export class ServerService extends TypeOrmQueryService<Server> {
  constructor(
    @InjectRepository(Server)
    repo: Repository<Server>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
