import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'dictio-app',
  templateUrl: 'views/app.html'
})
export class AppComponent { 
    constructor(private tokenService: TokenService) {
    }
}