import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { ToolbarService } from '../services/toolbar.service';
import { ViewPage } from './view.page';
import { ConjunctionsService } from '../services/conjunctions.service';
import { Conjunction } from '../../api/entities/conjunction.entity';

@Component({
  templateUrl: 'views/conjunctions.page.html'
})
export class ConjunctionsPage extends ViewPage<Conjunction> {
  constructor(private conjunctionsService: ConjunctionsService,
              private tokenService: TokenService,
              toolbarService: ToolbarService) {
    super(toolbarService);
  }
  
  protected async init(): Promise<Conjunction[]> {
    return await this.conjunctionsService.getAllConjunctions();
  }
}