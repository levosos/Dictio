// Global
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { AUTH_PROVIDERS } from 'angular2-jwt';

// Components
import { AppComponent }               from './components/app.component';
import { MainComponent }              from './components/main.component';
import { HomeComponent }              from './components/home.component';
import { NounsComponent }             from './components/nouns.component';
import { AdjectivesComponent }        from './components/adjectives.component';
import { AddNounFormComponent }       from './components/add-noun-form.component';
import { AddAdjectiveFormComponent }  from './components/add-adjective-form.component';
import { LoginFormComponent }         from './components/login-form.component';

// Services
import { HttpService }        from './services/http.service';
import { NounsService }       from './services/nouns.service';
import { AdjectivesService }  from './services/adjectives.service';
import { TokenService }       from './services/token.service'; 
import { UtilsService }       from './services/utils.service'; 

@NgModule({
  imports:      [ 
    BrowserModule, 
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: MainComponent, 
        children: 
        [
          { path: '', component: HomeComponent },
          { path: 'nouns', component: NounsComponent },
          { path: 'adjectives', component: AdjectivesComponent }
        ]
      },
      { path: 'login',  component: LoginFormComponent }
    ], { useHash: true}),
    FormsModule
  ],
  providers: [
    AUTH_PROVIDERS,
    HttpService,
    NounsService,
    AdjectivesService,
    TokenService,
    UtilsService
  ],
  declarations: [ 
    AppComponent, 
    MainComponent, 
    HomeComponent,
    NounsComponent,
    AdjectivesComponent,
    AddNounFormComponent,
    AddAdjectiveFormComponent,
    LoginFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }