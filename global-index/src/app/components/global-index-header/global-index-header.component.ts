import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-global-index-header',
  templateUrl: './global-index-header.component.html',
  styleUrls: ['./global-index-header.component.scss']
})
export class GlobalIndexHeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
