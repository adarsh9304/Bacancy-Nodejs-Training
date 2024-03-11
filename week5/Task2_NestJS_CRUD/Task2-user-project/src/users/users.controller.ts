/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { User } from './dtos/createUser.dto';
import { UpdateUser } from './dtos/updateUser.dto'
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
 
  @UseGuards(AuthGuard)
  @Get(':name')
  async findOne(@Param('name') name: string): Promise<User> {
    return this.usersService.findOne(name);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() newUser: User): Promise<void> {
    return this.usersService.create(newUser);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedUserData: UpdateUser): Promise<void> {
    return this.usersService.update(id, updatedUserData);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.usersService.delete(id);
  }
}
