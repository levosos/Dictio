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
import { HomeComponent }        from './components/home.component';
import { NounsComponent }       from './components/nouns.component';
import { AddNounFormComponent } from './components/add-noun-form.component';
import { LoginFormComponent }   from './components/login-form.component';

// Services
import { HttpService }   from './services/http.service';
import { NounsService }  from './services/nouns.service';
import { TokenService }  from './services/token.service'; 
import { UtilsService }  from './services/utils.service'; 

@NgModule({
  imports:      [ 
    BrowserModule, 
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: MainComponent, 
        children: 
        [
          { path: '', component: HomeComponent },
          { path: 'nouns', component: NounsComponent }
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
    TokenService,
    UtilsService
  ],
  declarations: [ 
    AppComponent, 
    MainComponent, 
    HomeComponent,
    NounsComponent,
    AddNounFormComponent,
    LoginFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }