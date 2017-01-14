import { JsonController, Post, Body, UndefinedResultCode, UnauthorizedError } from 'routing-controllers';
import * as jwt from 'jsonwebtoken';
import { Credentials } from '../models/credentials.model';
import { Secret } from '../utils/constants';
import * as users from '../repositories/users.repository';

@JsonController('/token')
export class TokensController {
    @Post('/')
    @UndefinedResultCode(500)
    public async loginUser(@Body({ required: true }) credentials: Credentials): Promise<string> {
        const user = await users.findUser(credentials.username);

        if (user == undefined || user.password != credentials.password) {
            throw new UnauthorizedError();
        }

        return jwt.sign(user, Secret);
    }
}