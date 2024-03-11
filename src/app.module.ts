import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConcertModule } from './concert/concert.module';
import { ReservationModule } from './reservation/reservation.module';
import { PointModule } from './point/point.module';

@Module({
  imports: [UserModule, ConcertModule, ReservationModule, PointModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
