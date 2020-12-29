import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { GlobalIndexMapComponent } from './global-index-map.component';


@NgModule({
  declarations: [
    GlobalIndexMapComponent,
  ],
  imports: [
    HighchartsChartModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [GlobalIndexMapComponent]
})
export class GlobalIndexMapModule { }
