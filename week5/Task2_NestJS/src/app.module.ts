/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './car-sell-pro/users/users.module';
import { ReportsModule } from './car-sell-pro/reports/reports.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './car-sell-pro/users/user.entity';
import { Report } from './car-sell-pro/reports/report.entity';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db.sqlite',
    entities:[User,Report],
    synchronize:true
  }), UsersModule,ReportsModule],
  providers:[AppService]
})
export class AppModule {}
