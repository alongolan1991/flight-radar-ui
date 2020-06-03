import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { ChartModel } from 'src/app/models/chart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  showLoader: boolean = false;
  dateYear: any;
  flights: any;
  chartDate: any;
  obs: Observable<any> = new Observable<any>();

  weekChart: ChartModel;

  constructor() { }

  ngOnInit() {

  }

  toggleLoader(isLoading: boolean) {
    this.showLoader = isLoading;
  }

  createPercentage(number): string {
    let percentage = number.toFixed(2);
    return percentage;
  }

  setDateYear(flights: any[]) {
    this.dateYear = new Date(flights[0].date).getFullYear();
  }

  setChartDate(date: any){
    this.chartDate = date;
  }

  setCharts(obs: Observable<any>) {
    this.weekChart = undefined;
    this.obs = obs;
    this.obs.subscribe(flightsArr => {
      if (!flightsArr) {
        console.log('No Result!');
      } else {
        this.showLoader = false;
        this.flights = flightsArr;
        this.weekChart = new ChartModel('week-bar', 'line', flightsArr);
      }
    }, err => {
      console.log(err);
    });
  }

}
