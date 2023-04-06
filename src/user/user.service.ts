import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReturnUserDto } from './dto/return-user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}


  async verifyEmailUser(emailCompare:string){
    const user = await this.prisma.user.findUnique({
      where:{
        email:emailCompare
      },
      select:{
        email: true
      }      
    })

    if(user){
      throw new BadRequestException("Email ja Em ultilização")
    }else{
      return false
    }
  }

  async create(createUserDto: CreateUserDto, user_created: string) {
    // console.log(user_created)
    const user = {
      ...createUserDto,
      user_created: user_created,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    
    await this.verifyEmailUser(user.email)
    

    
      const createdUser = await this.prisma.user.create({
            data: user
          })

          return {
            ...createdUser,
            password: undefined
          };

  }

  async findByEmail(email:string){
    return await this.prisma.user.findUnique({
      where: {
        email
      } 
    })

  }

  async findeAllUsers(): Promise<ReturnUserDto[]>{
    const users = await this.prisma.user.findMany({
      select:{
        id: true,
        email: true,
        name_user: true,
        user_created: true,
        ativo: true,
        tentativas:true
      }
    })
    return users

  }
}
