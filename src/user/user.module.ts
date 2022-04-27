import { forwardRef, Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UserResolver } from './user.resolver';
import { CreateUserInput } from './dto/create-user-dto';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';

const nestJsQueryTypeOrmModule = NestjsQueryTypeOrmModule.forFeature([User]);

@Module({

  providers: [UserResolver, UserService],

  imports: [
    
    AuthModule,

    NestjsQueryGraphQLModule.forFeature({
      
      // Register entities with typeorm and provide query services
      imports: [nestJsQueryTypeOrmModule],

      // Notice that we don't use "resolvers" but dtos instead
      // It is because we don't want endpoints generation
      dtos: [{ DTOClass: UserDto, CreateDTOClass: CreateUserInput }]

    }),

    // Import it into the UserModule so it can be exported
    nestJsQueryTypeOrmModule
  ],

  // export the persistance module so it can be used by the AuthModule
  exports: [nestJsQueryTypeOrmModule]
})
export class UserModule {}