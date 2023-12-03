import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Subject, takeUntil } from 'rxjs';
import { Response } from 'src/app/models/weather-response';
@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit{
initialCityName = 'Roma';
wich : string = "";
w!: Response;
imageUrl: string = "";
constructor(private service: ApiService) { }

ngOnInit(): void {
  this.getWeatherData(this.initialCityName);
}

getWeatherData(cityName: string): void {
  this.service
    .getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        this.w = response;
        const sunriseTime = response.sys.sunrise;
        const sunsetTime = response.sys.sunset;
        const currentTime = Math.floor(Date.now() / 1000);
  
        if (sunriseTime < currentTime && currentTime < sunsetTime) {
          this.wich = "Day"
          console.log(this.wich);
        } else {
          this.wich = "Night"
          console.log(this.wich);
        }

        
      },
      error: (error) => {
        console.log(error);
      },
    });
}

onSubmit(): void {
  this.getWeatherData(this.initialCityName);
  this.initialCityName = '';
}






}
