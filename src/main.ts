import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueryFailedErrorExceptionFilter } from './common/filters';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import session from 'express-session';
import passport from 'passport';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(helmet())
  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: false,
      skipNullProperties: false,
      skipUndefinedProperties: false,
      forbidUnknownValues: true,
    }),
  );

  app.useGlobalFilters(new QueryFailedErrorExceptionFilter());

  const configService = app.get(ConfigService);
  app.use(
    session({
      secret: configService.get('jwt').secret,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}

bootstrap();