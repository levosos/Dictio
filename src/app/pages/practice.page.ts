import { Component, OnInit } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { UtilsService } from '../services/utils.service';
import { Noun } from '../../api/entities/noun.entity';
import { Challenge, IChallenger } from '../challengers/challenger';
import { NounsChallenger } from '../challengers/nouns.challenger';
import { VerbsChallenger } from '../challengers/verbs.challenger';
import { AdjectivesChallenger } from '../challengers/adjectives.challenger';
import { ConjunctionsChallenger } from '../challengers/conjunctions.challenger';

enum Language {
  Spanish,
  English
}

enum State {
  Question,
  Answer,
}

interface Settings {
  answer: boolean;
  language: Language;
}

@Component({
  templateUrl: 'views/practice.page.html',
  providers: [ NounsChallenger, VerbsChallenger, AdjectivesChallenger, ConjunctionsChallenger ]
})
export class PracticePage implements OnInit {
  private Language = Language;
  private State = State;

  private challengers: Array<IChallenger>;
  private challenge: Challenge;
  private state: State = State.Question;
  private settings: Settings = { answer: true, language: Language.Spanish };
  
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
  }
  
  private async pressed(): Promise<void> {
    if (this.settings.answer) {
      if (this.state == State.Question) {
        this.state = State.Answer;
        return;
      }

      this.state = State.Question;
      await this.next();
    }
    else {
      await this.next();
    }
  }
}