// Global
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { AUTH_PROVIDERS } from 'angular2-jwt';

// Components
import { AppComponent }         from './components/app.component';
import { MainComponent }        from './components/main.component';
import { NounsComponent }       from './components/nouns.component';
import { AddNounFormComponent } from './components/add-noun-form.component';
import { LoginFormComponent }   from './components/login-form.component';

// Services
import { HttpService }   from './services/http.service';
import { NounsService }  from './services/nouns.service';
import { TokenService }  from './services/token.service'; 

@NgModule({
  imports:      [ 
    BrowserModule, 
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login',  component: LoginFormComponent },
      { path: 'nouns',  component: NounsComponent },
      { path: '',       component: MainComponent }
    ]),
    FormsModule
  ],
  providers: [
    AUTH_PROVIDERS,
    HttpService,
    NounsService,
    TokenService
  ],
  declarations: [ 
    AppComponent, 
    MainComponent, 
    NounsComponent,
    AddNounFormComponent,
    LoginFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }