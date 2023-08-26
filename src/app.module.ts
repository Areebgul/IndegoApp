import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module'; // Import your Prisma module
import { IndegoModule } from './indego/indego.module'; // Import your Indego module
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule, // Include your Prisma module
    IndegoModule, // Include your Indego module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
