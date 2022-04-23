import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

//TODO: remove this factory as it is unused

@Injectable()
export class TypeOrmConfigFactory implements TypeOrmOptionsFactory {

  constructor(readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DATABASE_HOST'),
      port: this.configService.get<number>('DATABASE_PORT'),
      username: this.configService.get<string>('DATABASE_USER'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      database: this.configService.get<string>('DATABASE_NAME'),
      autoLoadEntities: true,
      //entities: [],
      //subscribers: [UserSubscriber],
      synchronize: true,
      cache: false,
      //migrations: [ path.join(__dirname, "/migrations/**/*{.ts,.js}") ],
      migrationsRun: false,
      // cli: {
      //     migrationsDir: "src/migrations",
      // },
      logging: true,
      logger: 'advanced-console',
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
  
}
