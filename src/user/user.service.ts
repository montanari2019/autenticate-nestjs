import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReturnUserDto } from './dto/return-user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

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
        name_user: true
      }
    })
    return users

  }
}
