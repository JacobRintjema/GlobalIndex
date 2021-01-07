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
        this.selectedIndex = 0;
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
          console.log("summary:", summary);

          console.log("length:", summary.length);
          if (summary.length > 0) {
            this.initializeSummaryData(summary);
          } else {
            this.hasKey = false;
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
    // for linebreaks
    let tempSummaryText = data[0].summary.replaceAll("\\n", "<br>");
    // for bullet points
    tempSummaryText = tempSummaryText.replaceAll("_ul", "<ul>");
    tempSummaryText = tempSummaryText.replaceAll("_/ul", "</ul>");
    tempSummaryText = tempSummaryText.replaceAll("_li", "<li>");
    tempSummaryText = tempSummaryText.replaceAll("_/li", "</li>");

    // numbered points
    let tempCitationData = data[0].citation.replaceAll("_ol", "<ol>");
    tempCitationData = tempCitationData.replaceAll("_/ol", "</ol>");
    tempCitationData = tempCitationData.replaceAll("_li", "<li>");
    tempCitationData = tempCitationData.replaceAll("_/li", "</li>");

    data[0].summary = tempSummaryText;
    data[0].citation = tempCitationData;
    this.summaryData = data;
  }

  public updateTitle(title: any) {
    this.title = title;
  }

  public getCitationNumber(citationId: any) {
    this.selectedIndex = 1;
    this.citationId = citationId;
  }

  public onTabGroupClicked(event: any) {
    this.selectedIndex = event.index;
  }
}