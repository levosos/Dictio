import { Component, OnInit } from '@angular/core';
import { ConjunctionsService } from '../services/conjunctions.service';
import { TokenService } from '../services/token.service';
import { UtilsService } from '../services/utils.service';
import { Conjunction } from '../../api/entities/conjunction.entity';

@Component({
  templateUrl: 'views/conjunctions.page.html'
})
export class ConjunctionsPage implements OnInit {
  private cache: Conjunction[];
  private conjunctions: Conjunction[];

  constructor(private conjunctionsService: ConjunctionsService,
              private tokenService: TokenService,
              private utils: UtilsService) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.conjunctions = this.cache = await this.conjunctionsService.getAllConjunctionsAsync();
  }

  private filter(pattern: string): void {
    this.conjunctions = this.cache.filter(conjunction => this.utils.contains(conjunction, pattern));
  }
}