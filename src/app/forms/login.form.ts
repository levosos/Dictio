import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Credentials } from '../../api/models/credentials.model';

@Component({
  templateUrl: 'views/login.form.html'
})
export class LoginForm {
    private username: string = '';
    private password: string = '';
    private hasError: boolean = false;

    constructor(private tokenService: TokenService) {
    }

    public async loginAsync(): Promise<void>
    {
        let credentials = new Credentials(
            this.username, 
            this.password);
        
        try {
            await this.tokenService.loginAsync(credentials);
        } catch (e) {
            this.hasError = true;
        }
    }    
}