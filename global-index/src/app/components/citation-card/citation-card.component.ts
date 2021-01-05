import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-citation-card',
  templateUrl: './citation-card.component.html',
  styleUrls: ['./citation-card.component.scss']
})
export class CitationCardComponent implements OnInit {
  @Input() summaryData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
