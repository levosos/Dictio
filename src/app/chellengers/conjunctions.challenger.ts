import { Injectable } from '@angular/core';
import { ConjunctionsService } from '../services/conjunctions.service';
import { Challenger, Challenge } from './challenger';
import { Conjunction } from '../../api/entities/conjunction.entity';

@Injectable()
export class ConjunctionsChallenger extends Challenger<Conjunction> {
  constructor(private conjunctionsService: ConjunctionsService) {
    super();
  }

  async init(): Promise<Conjunction[]> {
    return await this.conjunctionsService.getAllConjunctions();
  }
  
  convert(member: Conjunction): Challenge {
    return {
      description: 'conjunction word',
      english: member.english,
      spanish: member.spanish
    };
  }
}