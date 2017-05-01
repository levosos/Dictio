import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerbsService } from '../services/verbs.service';
import { TokenService } from '../services/token.service';
import { Utils } from '../services/utils.service';
import { Verb } from '../../api/entities/verb.entity';

@Component({
  templateUrl: 'views/verbs.page.html'
})
export class VerbsPage implements OnInit {
  private cache: Verb[];
  private verbs: Verb[];

  constructor(private verbsService: VerbsService,
              private tokenService: TokenService,
              private router: Router) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.verbs = this.cache = await this.verbsService.getAllVerbs();
  }

  private filter(pattern: string): void {
    this.verbs = this.cache.filter(verb => Utils.contains(verb, pattern));
  }
}