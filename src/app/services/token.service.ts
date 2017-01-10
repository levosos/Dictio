import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Credentials } from '../../api/models/credentials.model';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class TokenService {
    private static RestPath: string = 'rest/token';
    private static LocalStorageKey: string = 'id_token';

    constructor(private http: HttpService,
                private router: Router) {
    }

    public isLoggedIn(): boolean {
        return tokenNotExpired();
    }
    
    public async loginAsync(credentials: Credentials): Promise<void> {
        let token: string = await this.http.postAsync(TokenService.RestPath, credentials);
        localStorage.setItem(TokenService.LocalStorageKey, token);
        
        this.redirect();
    }

    public logout(): void {
        localStorage.removeItem(TokenService.LocalStorageKey);
        
        this.redirect();
    }

    private redirect(): void {
        this.router.navigateByUrl('');
    }
}