import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { GlobalIndexCountryCardComponent } from './global-index-country-card.component';


@NgModule({
  declarations: [
    GlobalIndexCountryCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [GlobalIndexCountryCardComponent]
})
export class GlobalIndexCountryCardModule { }
