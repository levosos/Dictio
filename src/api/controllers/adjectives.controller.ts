import { JsonController, Get, Post, Body, UndefinedResultCode, UseBefore } from 'routing-controllers';
import * as jwt from 'express-jwt';
import { Secret } from '../utils/constants';
import { Adjective } from '../entities/adjective.entity';
import * as adjectives from '../repositories/adjectives.repository';

@JsonController('/adjectives')
export class AdjectivesController {
    @Get('/')
    @UndefinedResultCode(500)
    public async getAllAdjectives(): Promise<Adjective[]> {
        return await adjectives.getAllAdjectives();
    }

    @Post('/')
    @UndefinedResultCode(202)
    @UseBefore(jwt({secret: Secret}))
    public async addAdjective(@Body({ required: true }) adjective: Adjective): Promise<void> {
        await adjectives.addAdjective(adjective);
    }
}