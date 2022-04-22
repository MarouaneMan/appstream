import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

let config:TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'test',
    autoLoadEntities: true,
    //entities: [],
    //subscribers: [UserSubscriber],
    synchronize: true,
    cache: false,
    migrations: [ path.join(__dirname, "/migrations/**/*{.ts,.js}") ],
    migrationsRun: false,
    cli: {
        migrationsDir: "src/migrations",
    },
    logging: true,
    logger: "advanced-console",
    namingStrategy: new SnakeNamingStrategy()
}

export default config;