import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { ToolbarService } from '../services/toolbar.service';
import { ViewPage } from './view.page';
import { NounsService } from '../services/nouns.service';
import { Noun, Gender } from '../../api/entities/noun.entity';

@Component({
  templateUrl: 'views/nouns.page.html'
})
export class NounsPage extends ViewPage<Noun> {
  private Gender = Gender;

  constructor(private nounsService: NounsService,
              private tokenService: TokenService,
              toolbarService: ToolbarService) {
    super(toolbarService);
  }
  
  protected async init(): Promise<Noun[]> {
    return await this.nounsService.getAllNouns();
  }
}