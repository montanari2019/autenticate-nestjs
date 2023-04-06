import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ReturnUserDto } from './dto/return-user.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserFromJwt } from 'src/auth/models/UserFromJwt';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

// alt + mshift + o = para limpar importações desnecessárias

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @IsPublic()
  @Post()
  @ApiOkResponse({description: "Rota para criação de um novo usuário", type: ReturnUserDto, isArray: false})
  create(@Body() createUserDto: CreateUserDto, @CurrentUser() userToken: UserFromJwt,) {
    // console.log(createUserDto, userToken)
    return this.userService.create(createUserDto, userToken.name_user);
  }
  
  // @Get()
  async getEmail(@Body() body: any){
    console.log(body.email)
    return this.userService.findByEmail(body.email)
  }
  
  @Get("/all")
  @ApiOkResponse({description: "Rota para listagem de todos os usuários", type: ReturnUserDto, isArray: true})
  getAllUsers(): Promise<ReturnUserDto[]>{    
    return this.userService.findeAllUsers()
  }


}
