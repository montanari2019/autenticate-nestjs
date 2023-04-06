import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsString } from "class-validator";
import { userDto } from "./user-dto";

export class userHistoryDto {

  @IsString()
  @ApiProperty()  
  id: string;

  @IsDate()
  @ApiProperty()  
  date_login: Date;
  
  @IsBoolean()
  @ApiProperty()  
  is_sucess: boolean;

  @IsString()
  @ApiProperty() 
  user_id: string;

  @ApiProperty()
  user: userDto;
}
