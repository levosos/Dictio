// Global
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

// Dictio
import { AppComponent }   from './components/app.component';
import { MainComponent }  from './components/main.component';
import { NounsComponent } from './components/nouns.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'nouns',  component: NounsComponent },
      { path: '',       component: MainComponent }
    ])
  ],
  declarations: [ 
    AppComponent, 
    MainComponent, 
    NounsComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }