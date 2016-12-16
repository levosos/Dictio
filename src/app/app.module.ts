// Global
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';

// Components
import { AppComponent }   from './components/app.component';
import { MainComponent }  from './components/main.component';
import { NounsComponent } from './components/nouns.component';
import { AddNounFormComponent } from './components/add-noun-form.component';

// Services
import { NounsService }   from './services/nouns.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'nouns',  component: NounsComponent },
      { path: '',       component: MainComponent }
    ]),
    FormsModule
  ],
  providers: [
    NounsService
  ],
  declarations: [ 
    AppComponent, 
    MainComponent, 
    NounsComponent,
    AddNounFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }