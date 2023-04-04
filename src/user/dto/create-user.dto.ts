import { IsEmail, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CreateUserDto {
    
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password precisa de letras maíusuclas, minusculas e números',
      })
    password:string;

    @IsString()
    name_user:string

}
