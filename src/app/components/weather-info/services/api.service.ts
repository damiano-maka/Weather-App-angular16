import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/weather-response';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private weatherApiKey = '3a663ad7cf8891e832cd45767e26615a';
  private imgApikey = "X8AcbwL6m82nO77_lDrN09rXcqQD6wwIQphknzsISmI"
  constructor(private http: HttpClient) {}


  getWeatherDatas(cityName: string): Observable<Response> {
    return this.http.get<Response>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.weatherApiKey}`
    );
  }

}