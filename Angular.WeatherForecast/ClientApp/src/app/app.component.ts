import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast, IWeatherForecast } from '../models/weatherForecast';
import { WeatherService } from '../services/WeatherService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Weather App';
  weatherObservable: Observable<WeatherForecast[]>;
  weatherForecasts: IWeatherForecast[];

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {

    this.weatherService.getWeatherForecast().subscribe(
      vals => { this.weatherForecasts = vals },
      error => { console.log(error) },
      this.successHandle.bind(this)  
    ); 
  }
   

  successHandle(): void {

    // Log it just so we know when the results get returned
    console.log("Weather Call Result: ");
    console.log(this.weatherForecasts);
  };
}
