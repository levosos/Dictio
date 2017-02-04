import { JsonController, Get, Post, Body, UndefinedResultCode, UseBefore } from 'routing-controllers';
import * as jwt from 'express-jwt';
import { Secret } from '../utils/constants';
import { Conjunction } from '../entities/conjunction.entity';
import * as conjunctions from '../repositories/conjunctions.repository';

@JsonController('/conjunctions')
export class ConjunctionsController {
    @Get('/')
    @UndefinedResultCode(500)
    public async getAllConjunctionsAsync(): Promise<Conjunction[]> {
        return await conjunctions.getAllConjunctions();
    }

    @Post('/')
    @UndefinedResultCode(202)
    @UseBefore(jwt({secret: Secret}))
    public async addConjunction(@Body({ required: true }) conjunction: Conjunction): Promise<void> {
        await conjunctions.addConjunction(conjunction);
    }
}