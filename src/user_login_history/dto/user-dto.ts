import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class userDto{
    @IsString()
    @ApiProperty()
    name_user: string;
    @IsString()
    @ApiProperty()
    email: string;
}