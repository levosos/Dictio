import { Component, OnInit } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { UtilsService } from '../services/utils.service';
import { Noun } from '../../api/entities/noun.entity';
import { Challenge, IChallenger } from '../chellengers/challenger';
import { NounsChallenger } from '../chellengers/nouns.challenger';
import { VerbsChallenger } from '../chellengers/verbs.challenger';
import { AdjectivesChallenger } from '../chellengers/adjectives.challenger';
import { ConjunctionsChallenger } from '../chellengers/conjunctions.challenger';

enum Language
{
  Spanish,
  English
}

@Component({
  templateUrl: 'views/practice.page.html',
  providers: [ NounsChallenger, VerbsChallenger, AdjectivesChallenger, ConjunctionsChallenger ]
})
export class PracticePage implements OnInit {
  private Language = Language;

  private challengers: Array<IChallenger>;
  private challenge: Challenge;
  private help: boolean = false;
  
  constructor(
    private nounsChallenger: NounsChallenger,
    private verbsChallenger: VerbsChallenger,
    private adjectivesChallenger: AdjectivesChallenger,
    private conjunctionsChallenger: ConjunctionsChallenger
    ) {
      this.challengers = [
        this.nounsChallenger, 
        this.verbsChallenger,
        this.adjectivesChallenger,
        this.conjunctionsChallenger
        ];
  }
  
  public async ngOnInit(): Promise<void> {
    await this.next();
  }

  private async next(): Promise<void> {
    if (this.challengers.length == 0) {
      // out of challengers
      return;
    }

    const index = Math.floor(Math.random() * this.challengers.length);
    const challenger = this.challengers[index];

    const challenge = await challenger.challenge();

    if (challenge === undefined) {
      // the challenger ran out of challenges
      this.challengers.splice(index, 1);
      return await this.next();
    }

    this.challenge = challenge;
    this.help = false;
  }
}