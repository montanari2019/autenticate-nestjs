import { IsEmail, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class ReturnUserDto {

    @IsString()
    id:string
    
    @IsEmail()
    email: string;

    @IsString()
    name_user:string

}
