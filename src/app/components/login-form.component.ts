import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Credentials } from '../../api/models/credentials.model';

@Component({
  selector: 'login-form',
  templateUrl: 'views/login-form.html'
})
export class LoginFormComponent {
    private username: string = '';
    private password: string = '';
    private hasError: boolean = false;

    constructor(private tokenService: TokenService,
                private router: Router) {
    }

    public async loginAsync(): Promise<void>
    {
        let credentials = new Credentials(
            this.username, 
            this.password);
        
        try {
            await this.tokenService.loginAsync(credentials);
            this.router.navigateByUrl('');            
        } catch (e) {
            this.hasError = true;
        }
    }    
}