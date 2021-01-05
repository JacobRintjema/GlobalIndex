import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {
  //@Input() summary: string = '';
  //@Input() title: string = '';
  @Input() summaryData: any;
  @Output() citation = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public routeCitation(citationId: number) {
    this.citation.emit(citationId);
  }

}
