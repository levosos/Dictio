import { JsonController, Get, Post, Body, UndefinedResultCode, UseBefore } from 'routing-controllers';
import { Verb } from '../entities/verb.entity';
import * as verbs from '../repositories/verbs.repository';

@JsonController('/verbs')
export class VerbsController {
    @Get('/')
    @UndefinedResultCode(500)
    public async getAllVerbs(): Promise<Verb[]> {
        return await verbs.getAllVerbs(verbs.Level.Overview);
    }
}