// src/indego/indego.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import axios from 'axios';
import { WeatherService } from './weather.service'; // Import the WeatherService

@Injectable()
export class IndegoService {
  constructor(private prisma: PrismaService, private weatherService: WeatherService) { } // Inject the WeatherService

  // src/indego/indego.service.ts

  async fetchAndStoreIndegoData() {
    try {
      const response = await axios.get('https://www.rideindego.com/stations/json/');
      const indegoData = response.data;

      for (const station of indegoData.features) {
        const weatherData = await this.weatherService.getCurrentWeather();

        await this.prisma.indegoStation.upsert({
          where: { stationId: station.properties.kioskId },
          update: {
            bikesAvailable: station.properties.bikesAvailable,
            docksAvailable: station.properties.docksAvailable,
            totalDocks: station.properties.totalDocks,
          },
          create: {
            stationId: station.properties.kioskId,
            bikesAvailable: station.properties.bikesAvailable,
            docksAvailable: station.properties.docksAvailable,
            totalDocks: station.properties.totalDocks,
          },
        });

        if (weatherData) {
          await this.prisma.weather.upsert({
            where: { location: 'Philadelphia' }, // Adjust the location as needed
            update: {
              temperature: weatherData.main.temp,
              description: weatherData.weather[0].description,
            },
            create: {
              location: 'Philadelphia',
              temperature: weatherData.main.temp,
              description: weatherData.weather[0].description,
            },
          });
        }
      }

      console.log('Indego data fetched and stored successfully.');
    } catch (error) {
      console.error('Error fetching or storing Indego data:', error);
    }
  }

}
