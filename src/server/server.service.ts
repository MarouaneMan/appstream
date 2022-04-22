import { InjectQueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Server } from './server.entity';

@Injectable()
export class ServerService extends TypeOrmQueryService<Server> {

    constructor
    (
        @InjectRepository(Server)
        repo: Repository<Server>
    )
    {
        super(repo, { useSoftDelete: true })
    }
}
