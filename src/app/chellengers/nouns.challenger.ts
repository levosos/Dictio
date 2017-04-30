import { Injectable } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { UtilsService } from '../services/utils.service';
import { Challenger, Challenge } from './challenger';
import { Noun, Gender } from '../../api/entities/noun.entity';

@Injectable()
export class NounsChallenger extends Challenger<Noun> {
  constructor(utils: UtilsService, private nounsService: NounsService) {
    super(utils);
  }

  async init(): Promise<Noun[]> {
    return await this.nounsService.getAllNouns();
  }
  
  convert(member: Noun): Challenge {
    return {
      description: 'noun',
      english: member.english,
      spanish: (member.gender == Gender.Masculine ? 'el' : 'la') + ' ' + member.spanish
    };
  }
}