import { Component, OnInit } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { TokenService } from '../services/token.service';
import { Noun, Gender } from '../../api/entities/noun.entity';

@Component({
  templateUrl: 'views/nouns.html'
})
export class NounsComponent implements OnInit {
  private Gender = Gender;

  private nouns: Noun[];

  constructor(private nounsService: NounsService,
              private tokenService: TokenService) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.nouns = await this.nounsService.getAllNounsAsync();
  }
}