import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalIndexPopulationDataService {

  populationURL: string = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-history.csv';
  populationData: any;

  constructor(private http: HttpClient) {

  }

  public getInfo(): any {
    this.populationData = this.http.get(this.populationURL, {responseType: 'text'}).subscribe(
      (data) => this.populationData.next(data));
    
    return this.populationData.asObservable()
  }

}
