import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcripty from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(email: string, password: string) {

    console.log('função de login');
    const user = await this.userService.findByEmail(email);

    if(user !== null) {
    console.log("User existe")
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
