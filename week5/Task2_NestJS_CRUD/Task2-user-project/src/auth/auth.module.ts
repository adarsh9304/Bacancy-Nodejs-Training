/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from 'src/users/users.repository';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'hello_programmers',
      signOptions: { expiresIn: '2d' },
    }),
  ],
  providers: [AuthService,UserRepository],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}