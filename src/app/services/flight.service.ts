import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';
import { FlightRequestModel } from '../models/flight-request.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService extends HttpHandlerService {

  getFlightScore(flightObj: FlightRequestModel) {
    // const path = '/flight-score-test';
    const path = '/flight-score';
    return this.get(path, flightObj);
  }

}
