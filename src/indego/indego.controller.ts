// src/indego/indego.controller.ts

import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { IndegoService } from './indego.service';
import { WeatherService } from './weather.service'; // Import the WeatherService

@Controller('api/v1')
@UseGuards(AuthGuard)
export class IndegoController {
  constructor(private indegoService: IndegoService, private weatherService: WeatherService) { } // Inject the WeatherService

  @Post('indego-data-fetch-and-store-it-db')
  async fetchAndStoreIndegoData() {
    await this.indegoService.fetchAndStoreIndegoData();
    return { message: 'Fetching and storing Indego data initiated.' };
  }
}
