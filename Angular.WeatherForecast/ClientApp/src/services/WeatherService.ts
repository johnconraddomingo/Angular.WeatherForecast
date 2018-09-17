import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { IWeatherForecast } from '../models/weatherForecast';

@Injectable({ providedIn: 'root' }) 
export class WeatherService {
   
  private weatherurl: string = "/api/SampleData/WeatherForecasts"; 
  constructor(private http: HttpClient) {

  }

  getWeatherForecast(): Observable<IWeatherForecast[]> {

    // We'll play around more with Observables in a future update 
    let observableReturn = this.http.get<IWeatherForecast[]>(this.weatherurl);
    observableReturn.subscribe(s => console.log(s))

    return observableReturn;
  }

}
