import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { GqlModuleOptions } from '@nestjs/graphql';

export type Config = {
  readonly database: TypeOrmModuleOptions;
  readonly graphql: GqlModuleOptions;
};

export const config = async (): Promise<Config> => ({
  /**
   * Database Config
   */
  database: (await import('./ormconfig')).default,

  /**
   * GraphQL Config
   */
  graphql: (await import('./graphql')).default,
});
