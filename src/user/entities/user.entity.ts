import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class User {
    id?: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password:string
    name_user:string
}
