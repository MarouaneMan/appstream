import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {

    canActivate(context: ExecutionContext) {
        console.log('Something');
        const ctx = GqlExecutionContext.create(context);
        const {req} = ctx.getContext();
        
        // super.logIn(req); // logIn is used to instantiate a new session

        return super.canActivate(context);
    }
    
    getRequest(context:ExecutionContext)
    {
        const ctx = GqlExecutionContext.create(context);
        const {req} = ctx.getContext();
        req.body = ctx.getArgs().loginInputDto;
        return req;
    }
}