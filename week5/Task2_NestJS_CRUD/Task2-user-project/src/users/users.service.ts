/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from './dtos/createUser.dto';
import { UpdateUser } from './dtos/updateUser.dto'
import { UserRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(name:string): Promise<User> {
    return this.userRepository.findOne(name);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async create(newUser: User): Promise<void> {
    return this.userRepository.create(newUser);
  }

  async update(id: number, updatedUserData: UpdateUser): Promise<void> {
    return this.userRepository.update(id, updatedUserData);
  }

  async delete(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
