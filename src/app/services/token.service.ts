import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { UtilsService } from './utils.service';
import { Credentials } from '../../api/models/credentials.model';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { User, Role } from '../../api/entities/user.entity';

@Injectable()
export class TokenService {
    private static RestPath: string = 'rest/token';
    private static LocalStorageKey: string = 'id_token';

    constructor(private http: HttpService,
                private utils: UtilsService,
                private router: Router) {
    }

    public get user(): User | undefined {
        if (!this.isLoggedIn()) {
            return undefined;
        }

        const token = localStorage.getItem(TokenService.LocalStorageKey);
        return new JwtHelper().decodeToken(token);
    }

    public isAdmin(): boolean {
        const user = this.user;
        
        if (user == undefined) {
            return false;
        }

        return user.role == Role.Admin;
    }

    public isLoggedIn(): boolean {
        return tokenNotExpired();
    }
    
    public async loginAsync(credentials: Credentials): Promise<void> {
        let token: string = await this.http.postAsync(TokenService.RestPath, credentials);
        localStorage.setItem(TokenService.LocalStorageKey, token);
        
        this.utils.toast('Logged in as \'' + this.utils.capitalizeString(this.user.username) + '\'');
        this.redirect();
    }

    public logout(): void {
        localStorage.removeItem(TokenService.LocalStorageKey);
        
        this.utils.toast('Logged out');
        this.redirect();
    }

    private redirect(): void {
        this.router.navigateByUrl('');
    }
}