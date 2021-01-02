import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalIndexPopulationDataService } from './global-index-population-data.service';

@NgModule({
  declarations: [
    GlobalIndexPopulationDataService
  ],
  imports: [
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class GlobalIndexPopulationDataServiceModule { }
