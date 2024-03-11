/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { User } from './dtos/createUser.dto'
import { UpdateUser } from './dtos/updateUser.dto'

@Injectable()
export class UserRepository {
    private async getUsers(): Promise<User[]> {
        try {
          const contents = await readFile('users.json', 'utf-8');
          return JSON.parse(contents);
        } catch (error) {
          // Handle file read error or JSON parse error
          console.error('Error reading users.json:', error);
          return [];
        }
      }
    
      private async saveUsers(users: User[]): Promise<void> {
        try {
          await writeFile('users.json', JSON.stringify(users, null, 2));
        } catch (error) {
          // Handle file write error
          console.error('Error writing to users.json:', error);
        }
      }

  async findOne(name:string): Promise<User> {
    const users = await this.getUsers();
    return users.find((user) => user.name === name);
  }

  async findAll(): Promise<User[]> {
    return this.getUsers();
  }

  async create(newUser: User): Promise<void> {
    const users = await this.getUsers();

    // Generate unique ID for new user
    const id =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

    newUser.id = id;
    users.push(newUser);

    await this.saveUsers(users);
  }

  async update(id: number, updatedUserData: UpdateUser): Promise<void> {
    const users = await this.getUsers();
    const userIndex = users.findIndex((user) => user.id === +id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    users[userIndex] = {
      ...users[userIndex],
      ...updatedUserData,
    };

    await this.saveUsers(users);
  }

  async delete(id: number): Promise<void> {
    const users = await this.getUsers();
    const updatedUsers = users.filter((user) => user.id !== id);

    if (users.length === updatedUsers.length) {
      throw new Error('User not found');
    }

    await this.saveUsers(updatedUsers);
  }
}
