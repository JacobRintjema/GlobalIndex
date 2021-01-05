import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalIndexMapComponent } from './components/global-index-map/global-index-map.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalIndexCountryCardComponent } from './components/global-index-country-card/global-index-country-card.component';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GlobalIndexHeaderComponent } from './components/global-index-header/global-index-header.component';
import { GlobalIndexSidenavComponent } from './components/global-index-sidenav/global-index-sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { CitationCardComponent } from './components/citation-card/citation-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalIndexMapComponent,
    GlobalIndexCountryCardComponent,
    GlobalIndexHeaderComponent,
    GlobalIndexSidenavComponent,
    SummaryCardComponent,
    CitationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
