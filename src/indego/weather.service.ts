// src/indego/weather.service.ts

import { Injectable } from '@nestjs/common';
import { OpenWeatherMap } from 'openweathermap-ts';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'd053250eb4cb8f03fc32ca4b95b48dcd';
  private readonly owm = new OpenWeatherMap(this.apiKey);

  async getCurrentWeather() {
    try {
      const response = await this.owm.getCurrentWeather({ q: 'Philadelphia' }); // You can adjust the location as needed
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
}
