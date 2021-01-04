import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  /*
  // Defaults to USA for location
  private dataSource: any = new BehaviorSubject('us');
  currentData: any = this.dataSource.asObservable();

  constructor() { }

  public emit(eventBusData: any) {
    this.dataSource.next(eventBusData);
  }
  */

  dataSource: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }
}
