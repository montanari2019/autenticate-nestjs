import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNumber, IsString,} from "class-validator";

export class ReturnUserDto {

    @IsString()
    @ApiProperty()
    id:string
    
    @IsEmail()
    @ApiProperty()
    email: string;
    
    @IsString()
    @ApiProperty()
    name_user:string

    @IsBoolean()
    @ApiProperty()
    ativo: boolean

    @IsNumber()
    @ApiProperty()
    tentativas: number
    
    @IsString()
    @ApiProperty()
    user_created: string

}
