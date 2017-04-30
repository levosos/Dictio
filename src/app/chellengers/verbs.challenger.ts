import { Injectable } from '@angular/core';
import { VerbsService } from '../services/verbs.service';
import { UtilsService } from '../services/utils.service';
import { Challenger, Challenge } from './challenger';
import { Verb } from '../../api/entities/verb.entity';

@Injectable()
export class VerbsChallenger extends Challenger<Verb> {
  constructor(utils: UtilsService, private verbsService: VerbsService) {
    super(utils);
  }

  async init(): Promise<Verb[]> {
    return await this.verbsService.getAllVerbs();
  }
  
  convert(member: Verb): Challenge {
    return {
      description: 'verb',
      english: 'to ' + member.english,
      spanish: member.infinitive
    };
  }
}