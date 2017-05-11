import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { ToolbarService } from '../services/toolbar.service';
import { ViewPage } from './view.page';
import { VerbsService } from '../services/verbs.service';
import { Verb } from '../../api/entities/verb.entity';

@Component({
  templateUrl: 'views/verbs.page.html'
})
export class VerbsPage extends ViewPage<Verb> {
  constructor(private verbsService: VerbsService,
              private tokenService: TokenService,
              private router: Router,
              toolbarService: ToolbarService) {
    super(toolbarService);
  }
  
  protected async init(): Promise<Verb[]> {
    return await this.verbsService.getAllVerbs();
  }
}