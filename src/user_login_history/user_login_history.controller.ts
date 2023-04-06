import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLoginHistoryService } from './user_login_history.service';
import { CreateUserLoginHistoryDto } from './dto/create-user_login_history.dto';
import { UpdateUserLoginHistoryDto } from './dto/update-user_login_history.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { type } from 'os';
import { userHistoryDto } from './dto/user-historydto';


@ApiTags('User Login')
@Controller('userhistory')
export class UserLoginHistoryController {
  constructor(private readonly userLoginHistoryService: UserLoginHistoryService) {}

 

  @Get()
  findAll() {
    return this.userLoginHistoryService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({description: "Rota para listagem do histórico de acesso de um usuário", type: userHistoryDto, isArray: true})
  findOne(@Param('id') id: string) {
    return this.userLoginHistoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserLoginHistoryDto: UpdateUserLoginHistoryDto) {
    return this.userLoginHistoryService.update(+id, updateUserLoginHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLoginHistoryService.remove(+id);
  }
}
