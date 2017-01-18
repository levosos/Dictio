import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { UtilsService } from '../services/utils.service';

@Component({
  templateUrl: 'views/main.html'
})
export class MainComponent { 
    constructor(private tokenService: TokenService,
                private utils: UtilsService) {
    }
}