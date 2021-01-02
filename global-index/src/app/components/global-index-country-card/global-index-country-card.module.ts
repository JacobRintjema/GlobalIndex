import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { GlobalIndexCountryCardComponent } from './global-index-country-card.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    GlobalIndexCountryCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    BrowserModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [GlobalIndexCountryCardComponent]
})
export class GlobalIndexCountryCardModule { }
