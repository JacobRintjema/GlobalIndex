import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventBusService } from 'src/app/services/EventBusService/event-bus.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {
  @Input() summaryData: any;
  @Output() citation = new EventEmitter<number>();
  public eventBus: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  public routeCitation(citationId: number) {
    this.citation.emit(citationId);
  }

}
