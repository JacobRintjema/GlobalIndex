import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CitationCardComponent } from './citation-card.component';

@NgModule({
  declarations: [
    CitationCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
  ],
  exports: [
    BrowserModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [CitationCardComponent]
})
export class CitationCardModule { }
