import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({

    NestjsQueryGraphQLModule.forFeature({
        // import the NestjsQueryTypeOrmModule to register the entity with typeorm
        // and provide a QueryService
        imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
        // describe the resolvers you want to expose
        resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],
      }),
  
})
export class ServerModule {}
