import { IsEmail,isString,IsOptional, isEmail, IsString } from "class-validator";

export class updateUserDto{
    
    @IsEmail()
    @IsOptional()
    email:string

    @IsString()
    @IsOptional()
    password:string 

}