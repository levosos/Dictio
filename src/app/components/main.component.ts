import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  templateUrl: 'views/main.html'
})
export class MainComponent { 
    constructor(private tokenService: TokenService) {
    }
}