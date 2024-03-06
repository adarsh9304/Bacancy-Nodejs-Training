/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
@Controller('/users')
export class UsersController{
    @Get('/profile')
    getProfile(@Req() req:Request){
        console.log(req);
        return "Hello Adarsh"
    }
}