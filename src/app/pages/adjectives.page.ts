import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { ToolbarService } from '../services/toolbar.service';
import { ViewPage } from './view.page';
import { AdjectivesService } from '../services/adjectives.service';
import { Adjective } from '../../api/entities/adjective.entity';

@Component({
  templateUrl: 'views/adjectives.page.html'
})
export class AdjectivesPage extends ViewPage<Adjective> {
  constructor(private adjectivesService: AdjectivesService,
              private tokenService: TokenService,
              toolbarService: ToolbarService) {
    super(toolbarService);
  }
  
  protected async init(): Promise<Adjective[]> {
    return await this.adjectivesService.getAllAdjectives();
  }
}