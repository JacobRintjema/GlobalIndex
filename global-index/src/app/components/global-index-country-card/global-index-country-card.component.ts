import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/services/EventBusService/event-bus.service';

@Component({
  selector: 'app-global-index-country-card',
  templateUrl: './global-index-country-card.component.html',
  styleUrls: ['./global-index-country-card.component.scss']
})
export class GlobalIndexCountryCardComponent implements OnInit {
  /*
  public eventBusData: any;

  constructor(
    private eventBus: EventBusService
  ) {
    this.eventBus.currentData.subscribe((data: any) => {
      this.eventBusData = data;
      console.log(this.eventBusData);
    });
  }

  ngOnInit(): void {
  }
  */
  public key: any;
  public hasKey: boolean = false;

  constructor(private eventBus: EventBusService) {
    this.eventBus.dataSource.subscribe((data: any) => {
      if (data) {
        this.setKey(data);
      }
      
    });
  }

  ngOnInit(): void {
  }

  public setKey(data: any) {
    this.hasKey = true;
    this.key = data;
  }

}
