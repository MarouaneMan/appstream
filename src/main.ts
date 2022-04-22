import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueryFailedErrorExceptionFilter } from './core/filters/query-failed-error-exception.filter';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    skipMissingProperties: false,
    forbidUnknownValues: true,
  }));

  app.useGlobalFilters(new QueryFailedErrorExceptionFilter())
  
  await app.listen(3000);
}
bootstrap();
