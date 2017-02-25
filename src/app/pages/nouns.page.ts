import { Component, OnInit } from '@angular/core';
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
    this.nouns = this.cache = await this.nounsService.getAllNouns();
  }

  private filter(pattern: string): void {
    this.nouns = this.cache.filter(noun => this.utils.contains(noun, pattern));
  }
}