import { JsonController, Get, Post, Body, UndefinedResultCode, UseBefore, Param } from 'routing-controllers';
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
}