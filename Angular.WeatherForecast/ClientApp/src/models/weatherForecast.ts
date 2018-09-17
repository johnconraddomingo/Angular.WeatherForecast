export class WeatherForecast implements IWeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}

export interface IWeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}
