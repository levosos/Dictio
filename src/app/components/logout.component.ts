import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
    template: ''
})
export class LogoutComponent implements OnInit {
    constructor(private tokenService: TokenService) {
    }

    public ngOnInit(): void {
        this.tokenService.logout();
    }
}