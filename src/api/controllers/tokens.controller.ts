import { JsonController, Post, Body, UndefinedResultCode, UnauthorizedError } from 'routing-controllers';
import * as jwt from 'jsonwebtoken';
import { Credentials } from '../models/credentials.model';

@JsonController('/token')
export class TokensController {
    @Post('/')
    @UndefinedResultCode(500)
    public loginUser(@Body({ required: true }) credentials: Credentials): string {
        if (credentials.username != 'admin' ||
            credentials.password != 'pass')
        {
            throw new UnauthorizedError('Wrong credentials');
        }

        return jwt.sign(credentials, 'secret');
    }
}