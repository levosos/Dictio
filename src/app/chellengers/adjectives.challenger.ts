import { Injectable } from '@angular/core';
import { AdjectivesService } from '../services/adjectives.service';
import { Challenger, Challenge } from './challenger';
import { Adjective } from '../../api/entities/adjective.entity';

@Injectable()
export class AdjectivesChallenger extends Challenger<Adjective> {
  constructor(private adjectivesService: AdjectivesService) {
    super();
  }

  async init(): Promise<Adjective[]> {
    return await this.adjectivesService.getAllAdjectives();
  }
  
  convert(member: Adjective): Challenge {
    return {
      description: 'adjective',
      english: member.english,
      spanish: member.spanish
    };
  }
}