// Global
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MaterialModule }           from '@angular/material';
import { RouterModule }             from '@angular/router';
import { FormsModule }              from '@angular/forms';
import { AUTH_PROVIDERS }           from 'angular2-jwt';
import { MaterializeModule }        from "angular2-materialize";

// Components
import { AppComponent }           from './components/app.component';
import { MainComponent }          from './components/main.component';
import { LogoutComponent }        from './components/logout.component';
import { PrimitiveComponent }     from './pages/verb.page';
import { ToolbarComponent }       from './components/toolbar.component';

// Pages
import { HomePage }         from './pages/home.page';
import { NounsPage }        from './pages/nouns.page';
import { AdjectivesPage }   from './pages/adjectives.page';
import { VerbsPage }        from './pages/verbs.page';
import { VerbPage }         from './pages/verb.page';
import { ConjunctionsPage } from './pages/conjunctions.page';
import { PracticePage }     from './pages/practice.page';

// Forms
import { AddNounForm }        from './forms/add-noun.form';
import { AddAdjectiveForm }   from './forms/add-adjective.form';
import { AddVerbForm }        from './forms/add-verb.form';
import { AddConjunctionForm } from './forms/add-conjunction.form';
import { LoginForm }          from './forms/login.form';

// Services
import { HttpService }          from './services/http.service';
import { NounsService }         from './services/nouns.service';
import { AdjectivesService }    from './services/adjectives.service';
import { VerbsService }         from './services/verbs.service';
import { ConjunctionsService }  from './services/conjunctions.service';
import { TokenService }         from './services/token.service'; 
import { UtilsService }         from './services/utils.service';
import { ToolbarService }       from './services/toolbar.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    MaterializeModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent, 
        children: 
        [
          { path: '', component: HomePage },
          { path: 'nouns', component: NounsPage, data: { title: "Nouns" } },
          { path: 'adjectives', component: AdjectivesPage, data: { title: "Adjectives" } },
          { path: 'verbs', component: VerbsPage, data: { title: "Verbs" } },
          { path: 'verb/:id', component: VerbPage },
          { path: 'conjunctions', component: ConjunctionsPage, data: { title: "Conjunction Words" } },
          { path: 'practice', component: PracticePage, data: { title: "Practice" } }
        ]
      },
      { path: 'login',  component: LoginForm },
      { path: 'logout', component: LogoutComponent }
    ], { useHash: true}),
    FormsModule
  ],
  providers: [
    AUTH_PROVIDERS,
    HttpService,
    NounsService,
    AdjectivesService,
    VerbsService,
    ConjunctionsService,
    TokenService,
    UtilsService,
    ToolbarService
  ],
  declarations: [ 
    // Components
    AppComponent, 
    MainComponent, 
    LogoutComponent,
    PrimitiveComponent,
    ToolbarComponent,

    // Pages
    HomePage,
    NounsPage,
    AdjectivesPage,
    VerbsPage,
    VerbPage,
    ConjunctionsPage,
    PracticePage,

    // Forms
    AddNounForm,
    AddAdjectiveForm,
    AddVerbForm,
    AddConjunctionForm,
    LoginForm
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }