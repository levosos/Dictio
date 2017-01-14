import { JsonController, Get, Post, Body, UndefinedResultCode, UseBefore } from 'routing-controllers';
import * as jwt from 'express-jwt';
import { Secret } from '../utils/constants';
import { Noun, Gender } from '../entities/noun.entity';
import * as nouns from '../repositories/nouns.repository';

@JsonController('/nouns')
export class NounsController {
    @Get('/')
    @UndefinedResultCode(500)
    public async getAllNounsAsync(): Promise<Noun[]> {
        return await nouns.getAllNouns();
    }

    @Post('/')
    @UndefinedResultCode(202)
    @UseBefore(jwt({secret: Secret}))
    public async addNoun(@Body({ required: true }) noun: Noun): Promise<void> {
        await nouns.addNoun(noun);
    }
}