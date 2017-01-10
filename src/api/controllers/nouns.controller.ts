import { JsonController, Get, Post, Body, UndefinedResultCode } from 'routing-controllers';
import { Gender } from '../models/globals.model';
import { Noun } from '../models/noun.model';

@JsonController('/nouns')
export class NounsController {
    @Get('/')
    @UndefinedResultCode(500)
    public getAllNounsAsync(): Promise<Noun[]> {
        return Promise.resolve([
            new Noun(false, Gender.Male, 'friend', 'amigo'), 
            new Noun(true, Gender.Female, 'bed', 'cama')]);
    }

    @Post('/')
    @UndefinedResultCode(202)
    public addNoun(@Body({ required: true }) noun: Noun): void {
        console.log('Adding a noun [' + 
            noun.english + '] [' + 
            noun.spanish + '] ' + 
            (noun.favorite ? '[Favorite] ' : '[Not favorite] ') + 
            (noun.gender == Gender.Male ? '[Male]' : '[Female]'));
    }
}