import { Component, OnInit } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { TokenService } from '../services/token.service';
import { UtilsService } from '../services/utils.service';
import { Noun, Gender } from '../../api/entities/noun.entity';

@Component({
  templateUrl: 'views/nouns.html'
})
export class NounsComponent implements OnInit {
  private Gender = Gender;

  private cache: Noun[];
  private nouns: Noun[];
  private filter: string;

  constructor(private nounsService: NounsService,
              private tokenService: TokenService,
              private utils: UtilsService) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.nouns = this.cache = await this.nounsService.getAllNounsAsync();
  }

  private filterChanged(): void {
    this.nouns = this.cache.filter(noun => {
      return this.utils.stringContainsIgnoreCase(noun.english, this.filter) ||
             this.utils.stringContainsIgnoreCase(noun.spanish, this.filter);
    });
  }
}