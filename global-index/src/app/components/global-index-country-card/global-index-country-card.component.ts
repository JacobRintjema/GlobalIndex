import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/services/EventBusService/event-bus.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-global-index-country-card',
  templateUrl: './global-index-country-card.component.html',
  styleUrls: ['./global-index-country-card.component.scss']
})
export class GlobalIndexCountryCardComponent implements OnInit {
  public countryData: any;
  public summaryData: any
  public hasKey: boolean = false;
  public title: any;
  public citationId: number = 0;
  public selectedIndex = 0;

  constructor(
    private eventBus: EventBusService,
    private db: AngularFirestore
  ) {
    this.eventBus.dataSource.subscribe((data: any) => {
      if (data) {
        const countryKey: string = data.point['hc-key'];

        // queries for information related to the selected country
        const countriesQuery = db.collection('countries', (ref: any) => ref.where('key', '==', countryKey)).valueChanges();

        // queries for summaries for the selected country
        const summariesQuery = db.collection('summaries', (ref: any) => ref.where('key', '==', countryKey)).valueChanges();

        countriesQuery.subscribe(country => {
          this.initializeCountryData(country);
          this.updateTitle(country);
          
        });

        summariesQuery.subscribe(summary => {
          if (summary.length > 0) {
            this.initializeSummaryData(summary);
          } else {
            this.noDataError();
          }
        });
      }
    });
  }

  ngOnInit(): void {
  }

  public initializeCountryData(data: any) {
    this.hasKey = true;
    this.countryData = data;
  }

  public initializeSummaryData(data: any) {
    this.summaryData = data;
  }

  public updateTitle(title: any) {
    this.title = title;
  }

  public noDataError() {
    console.log('No summaries available');
  }

  public getCitationNumber(citationId: any) {
    this.selectedIndex = 1;
    console.log(citationId);
  }
}