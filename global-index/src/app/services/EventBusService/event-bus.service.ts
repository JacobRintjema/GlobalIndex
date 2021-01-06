import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  dataSource: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }
}
