import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class User {

    @ApiProperty()
    id?: string;
    
    @ApiProperty()
    @IsEmail()
    email: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password:string

    @IsString()
    @ApiProperty()
    name_user:string
}
