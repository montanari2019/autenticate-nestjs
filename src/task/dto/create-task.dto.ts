import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString } from "class-validator"

export class CreateTaskDto {

    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?:string
    
}
