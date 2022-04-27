import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { GqlModuleOptions } from '@nestjs/graphql';
import { JwtModuleOptions } from '@nestjs/jwt';

export type Config = {
  readonly database: TypeOrmModuleOptions;
  readonly graphql: GqlModuleOptions;
  readonly jwt: JwtModuleOptions;
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

  /**
   * JWT config
   */
  jwt: (await import('./jwt')).default
});
