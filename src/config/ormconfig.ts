import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import path from 'path';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  //entities: [],
  //subscribers: [],
  synchronize: true,
  cache: false,
  migrations: [path.join(__dirname, '..', '/migrations/**/*{.ts,.js}')],
  migrationsRun: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
  logging: true,
  logger: 'advanced-console',
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
