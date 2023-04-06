import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    
    @ApiProperty()
    @IsString()
    title?: string

    @ApiProperty()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsBoolean()
    is_concluded?:Boolean
}
