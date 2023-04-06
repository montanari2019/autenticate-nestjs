import { Injectable ,  NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReturnCreateTask } from './dto/return-task.dto';

@Injectable()
export class TaskService {
 
  constructor (private readonly prisma: PrismaService){}



  async create(createTaskDto: CreateTaskDto, user_id:string): Promise<ReturnCreateTask> {
    // console.log(user_id)
    const task = await this.prisma.task.create({
      data:{
        title: createTaskDto.title,
        description: createTaskDto.description,
        user_id: user_id
      }
    })


    return task;
  }

  async findAll(user_id:string) {

    return await this.prisma.task.findMany({
       where:{
        user_id: user_id
       }
    })
  }

  async findOne(id: string) {

    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }

  async verifyExistTask(id_task:string){
    const task = await this.prisma.task.findUnique({
      where:{
        id: id_task
      }
    })

    if(task){
      return true
    }else{
      throw new NotFoundException("Tarefa não encontrada")
    }

    // console.log("retorno do banco",task)
  }

  async  concludTask(id_task: string, concluded: Boolean) {

    const verifyExistTask = await this.verifyExistTask(id_task)

    if(verifyExistTask === true){
      if(concluded === true){
        return await this.prisma.task.update({
          where:{
            id: id_task
          },
          data:{
            is_concluded: true
          }
          
        })
        
        
        
      } else{
        return await this.prisma.task.update({
          where:{
            id: id_task
          },
          data:{
            is_concluded: false
          }
          
        })
  
      }
  
    }
    
    
  }
  

}
