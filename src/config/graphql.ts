import { GqlModuleOptions } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const config: GqlModuleOptions = {
  autoSchemaFile: true,
  playground: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
};

export default config;