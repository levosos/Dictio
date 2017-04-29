import { Component, OnInit } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { UtilsService } from '../services/utils.service';
import { Noun } from '../../api/entities/noun.entity';
import { Challenge } from '../chellengers/challenger';
import { NounsChallenger } from '../chellengers/nouns.challenger';

@Component({
  templateUrl: 'views/practice.page.html',
  providers: [ NounsChallenger ]
})
export class PracticePage implements OnInit {
  private challenge: Challenge;
  private help: boolean = false;
  
  constructor(private nounsChallenger: NounsChallenger) {
  }
  
  public async ngOnInit(): Promise<void> {
    await this.next();
  }

  private async next(): Promise<void> {
    const challenge = await this.nounsChallenger.challenge();

    if (challenge === undefined) {
      return;
    }

    this.challenge = challenge;
    this.help = false;
  }
}