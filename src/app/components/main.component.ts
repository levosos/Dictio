import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  templateUrl: 'views/main.component.html'
})
export class MainComponent { 
  constructor(private tokenService: TokenService) {
  }

  get sections(): any[] {
    return [
      { name: "Navigate", items: [
        { name: 'index', url: '#' },
        this.tokenService.isLoggedIn() ? 
          { name: 'logout', url: '#/logout' } : 
          { name: 'login', url: '#/login' }
      ]},
      { name: 'View', items: [
        { name: "Nouns", url: "#/nouns" },
        { name: "Adjectives", url: "#/adjectives" },
        { name: "Verbs", url: "#/verbs" },
        { name: "Words", url: "#/conjunctions" }
      ]}
    ];
  }
}