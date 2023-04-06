import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './auth/decorators/is-public.decorator';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from './user/entities/user.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Default")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  getHello() {
    return this.appService.getHello();
  }


  @Get('me')
  @ApiOkResponse({description:"Rota para informar os dados do token do usuário", type: User, isArray:false})
  getMe(@CurrentUser() user: User){
    // console.log(user)
    return user
  }


}
