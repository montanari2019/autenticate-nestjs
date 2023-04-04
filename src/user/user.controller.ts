import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ReturnUserDto } from './dto/return-user.dto';

// alt + mshift + o = para limpar importações desnecessárias

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async getEmail(@Body() body: any){
    console.log(body.email)
     return this.userService.findByEmail(body.email)
  }

  @Get("/all")
  getAllUsers(): Promise<ReturnUserDto[]>{    
    return this.userService.findeAllUsers()
  }


}
