import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueryFailedErrorExceptionFilter } from './common/filters';
import helmet from 'helmet';

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
      forbidUnknownValues: true,
    }),
  );

  app.useGlobalFilters(new QueryFailedErrorExceptionFilter());

  await app.listen(3000);
}

bootstrap();
