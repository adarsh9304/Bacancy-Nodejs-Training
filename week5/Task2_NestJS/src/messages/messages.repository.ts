import { Injectable } from "@nestjs/common";
import { readFile,writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository{
  async findOne(id:string){
     const contents =await readFile('messages.json','utf-8');
     const messages = JSON.parse(contents);
     console.log('hello findone');
     return messages[id];
  }
  async findAll(){
    const contents =await readFile('messages.json','utf-8');
    const messages = JSON.parse(contents);
    console.log("hello findAll", messages);
    return messages;
  }
  async create(content:string){
     const contents = await readFile('messages.json','utf-8');
     const messages=JSON.parse(contents);

     const id=Math.floor(Math.random()*999);
     messages[id]={id,content};

     await writeFile('messages.json',JSON.stringify(messages));
     console.log('hello create');

  }
}