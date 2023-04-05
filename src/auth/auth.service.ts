import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcripty from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/User-Token';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  login(user: User): UserToken {
    console.log("Service auth" ,user)

    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name_user: user.name_user,
    };

    console.log("Payload no login:", payload)

    const jwToken = this.jwtService.sign(payload)

    return{
        access_token: jwToken,
        user
    }



  }
  async validateUser(email: string, password: string) {
    console.log('função de login');
    const user = await this.userService.findByEmail(email);


    if (user !== null) {
      console.log('User existe');
      console.log(user)
      const isPasswordValid = await bcripty.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('email ou senha estão incorretos');
  }
}
