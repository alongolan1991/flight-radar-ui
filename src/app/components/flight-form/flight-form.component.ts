import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { FlightRequestModel } from 'src/app/models/flight-request.model';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {

  originInput: string;
  destinationInput: string;
  departureDateInput: Date;
  departureHourInput: string;
  isFormValid: boolean = false;
  @Output() emitLoader = new EventEmitter();
  @Output() emitFlightDetails = new EventEmitter();
  @Output() emitDate = new EventEmitter();
  originBorderColored: boolean = false;
  destinationBorderColored: boolean = false;

  constructor(private flightService: FlightService) {
  }

  ngOnInit() {
  }

  validateTextInput(type: string) {
    if (type === 'origin') {
      if (!this.originInput) {
        console.log('Please insert origin value');
        this.isFormValid = false;
        this.originBorderColored = true;

      } else {
        this.originBorderColored = false;
        this.isFormValid = true;
      }
    } else {
      if (!this.destinationInput) {
        console.log('Please insert destination value');
        this.isFormValid = false;
        this.destinationBorderColored = true;

      } else {
        this.destinationBorderColored = false;
        this.isFormValid = true;
      }
    }
  }

  getFlightScore() {

    const reqObj: FlightRequestModel = {
      origin: this.originInput.toUpperCase(),
      destination: this.destinationInput.toUpperCase(),
      departureDate: this.departureDateInput
    };
    reqObj.departureDate = reqObj.departureDate.getMonth() + 1 + '/' + reqObj.departureDate.getDate() + '/' + reqObj.departureDate.getFullYear();
    this.emitLoader.emit(true);

    const obs = this.flightService.getFlightScore(reqObj);
    this.emitFlightDetails.emit(obs);
    this.emitDate.emit(reqObj.departureDate);
  }
}

