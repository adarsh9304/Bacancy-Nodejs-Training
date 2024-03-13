/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../database/config'


@Module({
  imports:[TypeOrmModule.forRoot(dataSourceOptions), UsersModule],
})
export class AppModule {}
