import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CreateUserDto {
    
    @IsEmail()
    @ApiProperty()
    email: string;
    
    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password precisa de letras maíusuclas, minusculas e números',
    })
    password:string;
    
    
    @ApiProperty()
    @IsString()
    name_user:string

    

}


