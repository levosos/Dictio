// Global
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

// Components
import { AppComponent }   from './components/app.component';
import { MainComponent }  from './components/main.component';
import { NounsComponent } from './components/nouns.component';

// Services
import { NounsService }   from './services/nouns.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'nouns',  component: NounsComponent },
      { path: '',       component: MainComponent }
    ])
  ],
  providers: [
    NounsService
  ],
  declarations: [ 
    AppComponent, 
    MainComponent, 
    NounsComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }