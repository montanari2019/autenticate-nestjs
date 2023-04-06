import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReturnCreateTask } from './dto/return-task.dto';
import { UserFromJwt } from 'src/auth/models/UserFromJwt';

@ApiTags("Tasks")
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post("/create")
  @ApiOkResponse({description: "Rota para a criação de uma tarefa", type: ReturnCreateTask, isArray: false})
  async create(@Body() createTaskDto: CreateTaskDto,  @CurrentUser() userToken: UserFromJwt) {
    
    return await this.taskService.create(createTaskDto, userToken.id);
  }
  
  @Get()
  @ApiOkResponse({description: "Rota para retornar todas as tarefas de um usuário logado pelo token", type: ReturnCreateTask, isArray: true})
  async findAll(@CurrentUser() userToken: UserFromJwt) {
    return await this.taskService.findAll(userToken.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Patch('/update/:id/:concluded')
  async isConcludedTask(@Param('id') id: string, @Param("concluded") concluded: boolean) {
    return await this.taskService.concludTask(id, concluded);
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
