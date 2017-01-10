import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Credentials } from '../../api/models/credentials.model';

@Injectable()
export class TokenService {
    private static RestPath: string = 'rest/token';
    private static LocalStorageKey: string = 'token_id';

    constructor(private http: HttpService) {
    }

    public async loginAsync(credentials: Credentials): Promise<void> {
        let token: string = await this.http.postAsync(TokenService.RestPath, credentials);
        localStorage.setItem(TokenService.LocalStorageKey, token);
    }

    public logout(): void {
        localStorage.removeItem(TokenService.LocalStorageKey);
    }
}