import { Component, OnInit } from '@angular/core';
import { AdjectivesService } from '../services/adjectives.service';
import { TokenService } from '../services/token.service';
import { Utils } from '../services/utils.service';
import { Adjective } from '../../api/entities/adjective.entity';

@Component({
  templateUrl: 'views/adjectives.page.html'
})
export class AdjectivesPage implements OnInit {
  private cache: Adjective[];
  private adjectives: Adjective[];

  constructor(private adjectivesService: AdjectivesService,
              private tokenService: TokenService) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.adjectives = this.cache = await this.adjectivesService.getAllAdjectives();
  }

  private filter(pattern: string): void {
    this.adjectives = this.cache.filter(adjective => Utils.contains(adjective, pattern));
  }
}