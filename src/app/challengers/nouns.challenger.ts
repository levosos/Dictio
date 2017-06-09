import { Injectable } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { Challenger, Challenge } from './challenger';
import { Noun, Gender } from '../../api/entities/noun.entity';
import * as utils from '../utils/utils';
import * as english from '../utils/english';
import * as spanish from '../utils/spanish';

@Injectable()
export class NounsChallenger extends Challenger<Noun> {
  constructor(private nounsService: NounsService) {
    super();
  }

  async init(): Promise<Noun[]> {
    return await this.nounsService.getAllNouns();
  }
  
  convert(member: Noun): Challenge {
    let challenge: Challenge = {
      description: 'noun',
      english: member.english,
      spanish: (member.gender == Gender.Masculine ? 'el' : 'la') + ' ' + member.spanish,
    };

    if (member.countable && utils.generateRandomBoolean()) {
      challenge.description += ' | plural';
      challenge.english = english.convertNounToPlural(member.english),
      challenge.spanish = (member.gender == Gender.Masculine ? 'los' : 'las') + ' ' + spanish.convertNounToPlural(member.spanish)
    }
    
    return challenge;
  }
}