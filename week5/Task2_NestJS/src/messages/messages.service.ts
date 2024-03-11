import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {}
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  create(content: string) {
    return this.messageRepo.create(content);
  }
  update(id: string, content: string) {
    return this.messageRepo.update(id, content);
  }

  delete(id: string) {
    return this.messageRepo.delete(id);
  }
}
