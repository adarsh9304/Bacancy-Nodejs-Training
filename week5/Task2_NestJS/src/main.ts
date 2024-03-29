/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer-pro/computer/computer.module';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true
    })
  ); 
  await app.listen(4000);
}
bootstrap();
