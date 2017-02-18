import { Component, OnInit } from '@angular/core';
import { AdjectivesService } from '../services/adjectives.service';
import { TokenService } from '../services/token.service';
import { UtilsService } from '../services/utils.service';
import { Adjective } from '../../api/entities/adjective.entity';

@Component({
  templateUrl: 'views/adjectives.page.html'
})
export class AdjectivesPage implements OnInit {
  private cache: Adjective[];
  private adjectives: Adjective[];
  private filter: string;

  constructor(private adjectivesService: AdjectivesService,
              private tokenService: TokenService,
              private utils: UtilsService) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.adjectives = this.cache = await this.adjectivesService.getAllAdjectivesAsync();
  }

  private filterChanged(): void {
    this.adjectives = this.cache.filter(adjective => {
      return this.utils.filter(adjective.english, this.filter) ||
             this.utils.filter(adjective.spanish, this.filter);
    });
  }
}