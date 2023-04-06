import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcripty from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/User-Token';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserLoginHistoryService } from 'src/user_login_history/user_login_history.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userHistoryLogin: UserLoginHistoryService
  ) {}

  login(user: User): UserToken {
    // console.log("Service auth" ,user)

    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name_user: user.name_user,
    };

    // console.log("Payload no login:", payload)

    const jwToken = this.jwtService.sign(payload);

    return {
      access_token: jwToken,
      exp: 30,
      user,
    };
  }

  async validateUser(email: string, password: string) {
    console.log('função de login');
    const user = await this.userService.findByEmail(email);

    if (user !== null) {
      console.log('User existe');
      // console.log(user)
      const isPasswordValid = await bcripty.compare(password, user.password);

      if (isPasswordValid) {

        await this.userHistoryLogin.createHistoryLogin(user.id, true)
        
        await this.updateTentativas(true, user.id)
        
        return {
          ...user,
          password: undefined,
        };
        
        
      } 
      
      else {
        await this.userHistoryLogin.createHistoryLogin(user.id, false)
       
        await  this.updateTentativas(false, user.id)
      }
    }

    throw new Error('email ou senha estão incorretos');
  }

  async updateTentativas(success: boolean, id_user: string) {
    
    if (success === true) {
      await this.prisma.user.update({
        where: {
          id: id_user,
        },
        data: {
          tentativas: 0
        },
      });
    }
    else{

      await this.prisma.user.update({
        where:{
          id: id_user
        },
        data:{
          tentativas: {
            increment: 1
          }
        }
      })
    }
  }
}
