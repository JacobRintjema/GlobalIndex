import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SummaryCardComponent } from './summary-card.component';

@NgModule({
  declarations: [
    SummaryCardComponent
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
  bootstrap: [SummaryCardComponent]
})
export class SummaryCardModule { }
