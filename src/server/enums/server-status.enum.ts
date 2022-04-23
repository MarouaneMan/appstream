import { registerEnumType } from '@nestjs/graphql';

export enum ServerStatus {
  UP = 'UP',
  DOWN = 'DOWN',
  MAINTENANCE = 'MAINTENANCE',
}

registerEnumType(ServerStatus, { name: 'ServerStatus' });
