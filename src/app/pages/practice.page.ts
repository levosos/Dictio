import { Component, OnInit } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { UtilsService } from '../services/utils.service';
import { Noun, Gender } from '../../api/entities/noun.entity';

@Component({
  templateUrl: 'views/practice.page.html'
})
export class PracticePage implements OnInit {
  private Gender = Gender;

  private nouns: Noun[];
  private index: number = 0;
  private help: boolean = false;

  constructor(private nounsService: NounsService,
              private utils: UtilsService) {
  }
  
  public async ngOnInit(): Promise<void> {
    this.nouns = await this.nounsService.getAllNouns();
    this.utils.shuffle(this.nouns);
  }

  private next(): void {
      if (this.index == this.nouns.length - 1) {
          return;
      }
      
      ++this.index;
      this.help = false;
  }
}