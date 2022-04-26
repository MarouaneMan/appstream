import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UserResolver } from './user.resolver';
import { CreateUserInput } from './dto/create-user-dto';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Module({

  providers: [UserResolver, UserService, AuthService],

  imports: [
    
    NestjsQueryGraphQLModule.forFeature({
      
      // Register entities with typeorm and provide query services
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],

      // Notice that we don't use "resolvers" but dtos instead
      // It is because we don't want endpoints generation
      dtos: [{ DTOClass: UserDto, CreateDTOClass: CreateUserInput }]

    }),
  ],
})
export class UserModule {}