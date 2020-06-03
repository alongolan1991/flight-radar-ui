import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ChartModel } from 'src/app/models/chart.model';
import * as c3 from 'c3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Input() chart: ChartModel;
  @Input() chartDate: any;
  maxFlight: {};
  minFlight: {};
  _c3: any;

  constructor() {
  }

  ngOnInit() {
    console.log('Total Flights: ', this.chart.flights);
    this.maxFlight = Math.max.apply(Math, this.chart.flights.map((flight) => {
      return flight.percentage;
    }));
    this.minFlight = Math.min.apply(Math, this.chart.flights.map((flight) => {
      return flight.percentage;
    }));

    let min = Infinity;
    let max = 0;
    this.chart.flights.forEach(flight => {
      if (flight.percentage < min) {
        min = flight.percentage;
        this.minFlight = flight;
      }
      if (flight.percentage > max) {
        max = flight.percentage;
        this.maxFlight = flight;
      }
    });
    console.log(this.minFlight);
    console.log(this.maxFlight);
  }

  ngAfterViewInit() {
    this.setChart();
  }

  setChart() {
    const percentageData = ['Percentage'];
    // const scoreData = ['Score'];
    const x: any[] = ['x'];
    this.chart.flights.forEach(currentFlight => {
      percentageData.push(this.createPercentage(currentFlight.percentage));
      // scoreData.push(currentFlight.score);
      x.push(new Date(currentFlight.date));
    });

    let chartData = {
      bindto: '#' + this.chart.id,
      data: {
        colors: {
          'Percentage': '#bbe1fa',
          // 'Score': '#3282b8'
        },
        x: 'x',
        columns: [
          x,
          // scoreData,
          percentageData
        ],
        axes: {
          percentageData: 'y2',
          // scoreData: 'y1'
        },
        types: {
          'Percentage': this.chart.type,
          Score: this.chart.type,
        }
      },
      size: {
        width: 1000
      },
      padding: {
        right: 20
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%m-%d'
          }
        }
      }
    };
    this._c3 = c3.generate(chartData);
  }

  createPercentage(number): string {
    let percentage = number.toFixed(2);
    return percentage;
  }

  changeToBar() {
    this._c3.transform('bar');
  }

  changeToLine() {
    this._c3.transform('line');
  }

}
