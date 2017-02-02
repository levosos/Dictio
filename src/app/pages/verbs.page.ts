import { Component, OnInit } from '@angular/core';
import { VerbsService } from '../services/verbs.service';
import { TokenService } from '../services/token.service';
import { UtilsService } from '../services/utils.service';
import { Verb } from '../../api/entities/verb.entity';

@Component({
  templateUrl: 'views/verbs.page.html'
})
export class VerbsPage implements OnInit {
  private cache: Verb[];
  private verbs: Verb[];
  private filter: string;

  constructor(private verbsService: VerbsService,
              private tokenService: TokenService,
              private utils: UtilsService) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.verbs = this.cache = await this.verbsService.getAllVerbsAsync();
  }

  private filterChanged(): void {
    this.verbs = this.cache.filter(verb => {
      return this.utils.stringContainsIgnoreCase(verb.infinitive, this.filter) ||
             this.utils.stringContainsIgnoreCase(verb.english, this.filter);
    });
  }
}