import { Component, OnInit, ViewChild } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { TokenService } from '../services/token.service';
import { UtilsService } from '../services/utils.service';
import { Noun, Gender } from '../../api/entities/noun.entity';

@Component({
  templateUrl: 'views/nouns.page.html'
})
export class NounsPage implements OnInit {
  private Gender = Gender;

  private cache: Noun[];
  private nouns: Noun[];
  
  constructor(private nounsService: NounsService,
              private tokenService: TokenService,
              private utils: UtilsService) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.nouns = this.cache = await this.nounsService.getAllNounsAsync();
  }

  private filter(pattern: string): void {
    if (this.nouns === undefined || this.cache === undefined) {
      return;
    }

    this.nouns = this.cache.filter(noun => {
      return this.utils.filter(noun.english, pattern) ||
             this.utils.filter(noun.spanish, pattern);
    });
  }
}