import { Injectable } from '@nestjs/common';
import { CreateUserLoginHistoryDto } from './dto/create-user_login_history.dto';
import { UpdateUserLoginHistoryDto } from './dto/update-user_login_history.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserLoginHistoryService {

  constructor (private readonly prisma: PrismaService){}

  async createHistoryLogin(id_user: string, success: boolean) {
   if(success === true){
    await this.prisma.user_history_login.create({
      data: {
        is_sucess: true,
        user_id: id_user,
      },
    });
   }else{
    await this.prisma.user_history_login.create({
      data: {
        is_sucess: false,
        user_id: id_user,
      },
    });
   }
  }

  findAll() {
    return `This action returns all userLoginHistory`;
  }

  async findOne(id_user: string) {
    return await this.prisma.user_history_login.findMany({
      
      where:{
        user_id: id_user
      },
      include:{
        user: {
          select:{
            name_user: true,
            email: true,
          }
        },
      
      },
      orderBy:{
        date_login: "asc"
      }
      

            
    }) ;
  }

  update(id: number, updateUserLoginHistoryDto: UpdateUserLoginHistoryDto) {
    return `This action updates a #${id} userLoginHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLoginHistory`;
  }
}
