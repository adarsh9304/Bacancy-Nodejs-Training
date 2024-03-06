import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesRepository } from './messages.repository';

@Controller('messages')
export class MessagesController {
  messageService: MessagesRepository;

  constructor() {
    //services is creating its own dependency
    // Use DEPENDENCY INJECTION
    this.messageService = new MessagesRepository();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
    console.log(body);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if(!message){
        throw new NotFoundException('message not found')
    }
    return message;
  }
}
