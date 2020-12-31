import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-global-index-sidenav',
  templateUrl: './global-index-sidenav.component.html',
  styleUrls: ['./global-index-sidenav.component.scss']
})
export class GlobalIndexSidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
