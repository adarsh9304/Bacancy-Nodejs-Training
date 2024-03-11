import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
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

    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
  @Put('/:id')
  async updateMessage(@Param('id') id: string, @Body() body: CreateMessageDto) {
    const updatedMessage = await this.messageService.update(id, body.content);
    if (!updatedMessage) {
      throw new NotFoundException('Message not found');
    }
    return updatedMessage;
  }

  @Delete('/:id')
  async deleteMessage(@Param('id') id: string) {
    const deletedMessage = await this.messageService.delete(id);
    if (!deletedMessage) {
      throw new NotFoundException('Message not found');
    }
    return deletedMessage;
  }
}
