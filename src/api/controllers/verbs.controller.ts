import { JsonController, Get, Post, Body, UndefinedResultCode, UseBefore, Param } from 'routing-controllers';
import * as jwt from 'express-jwt';
import { Secret } from '../utils/constants';
import { Verb } from '../entities/verb.entity';
import * as verbs from '../repositories/verbs.repository';

@JsonController('/verbs')
export class VerbsController {
    @Get('/')
    @UndefinedResultCode(500)
    public async getAllVerbs(): Promise<Verb[]> {
        return await verbs.getAllVerbsOverview();
    }
    
    @Get('/:id')
    @UndefinedResultCode(500)
    public async getVerb(@Param("id") id: number): Promise<Verb> {
        return await verbs.getVerb(id);
    }

    @Post('/')
    @UndefinedResultCode(202)
    @UseBefore(jwt({secret: Secret}))
    public async addVerb(@Body({ required: true }) request: Verb): Promise<void> {
        const verb = await Verb.generate(request.infinitive, request.english);
        await verbs.addVerb(verb);
    }
}