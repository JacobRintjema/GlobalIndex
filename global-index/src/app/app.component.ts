import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'global-index';
  ref: any;
  data: any;
  name: string = ''

  constructor(private store: AngularFirestore) {
    // let things = store.collection('countries') as Query;
    // query.subscribe(console.log);

    let things = store.collection('countries', (ref: any) => ref.where('name', '==', 'Canada')).valueChanges();
    things.subscribe(console.log);
    this.data = things.subscribe();

    try {
      this.name = this.data[0];
    } catch (err) {
      // ignore
    }

  }
}
