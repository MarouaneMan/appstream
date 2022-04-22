import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus, InternalServerErrorException, Logger } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

const SQL_UNIQUE_CONSTRAINT_VIOLATION = "23505";

@Catch(QueryFailedError)
export class QueryFailedErrorExceptionFilter implements ExceptionFilter {
  
  catch(exception: QueryFailedError, host: ArgumentsHost) 
  {
    Logger.error(exception.message, exception.stack, "QueryFailedErrorExceptionFilter");
  
    const supportedErrors =  {
      [SQL_UNIQUE_CONSTRAINT_VIOLATION]: () => this.handleUniqueConstraintViolation(exception)
    }

    // Handle TypeOrm error or throw an InternalServerError exception
    if (exception.driverError.code in supportedErrors)
      supportedErrors[exception.driverError.code]();
    else
      throw new InternalServerErrorException();
  }

  handleUniqueConstraintViolation(exception:QueryFailedError)
  {
    const re = /^Key \((.+?)\)/;
    let match = exception.driverError.detail.match(re);
    
    // Should never happen
    if (!match)
      throw new InternalServerErrorException();

    throw new BadRequestException(`${match[1]} already exists`)
  }
}
