export class ChartModel {
  id: string;
  type: string;
  flights: any;

  constructor(id: string, type: string, flights: any){
    this.id = id;
    this.type = type;
    this.flights = flights;
  }
}
