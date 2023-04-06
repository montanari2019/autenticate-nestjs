import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsDate, IsString } from "class-validator"

export class ReturnCreateTask{

    @ApiProperty()
    @IsString()
    id: string

    @ApiProperty()
    @IsString()
    title:string

    @ApiProperty()
    @IsString()
    description:string

    @ApiProperty()
    @IsBoolean()
    is_concluded: Boolean

    @ApiProperty()
    @IsString()
    user_id: string

    @ApiProperty()
    @IsDate()
    createAt: Date
    
    @ApiProperty()
    @IsDate()
    updateAt: Date
}