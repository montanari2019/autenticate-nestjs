import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/Auth-request';
import { IsPublic } from './decorators/is-public.decorator';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req:AuthRequest){
        // console.log(req.user)
        return this.authService.login(req.user)
    }
    // login(@Request() req:AuthRequest){
    //     // console.log(req.user)
    //     return this.authService.login(req.user)
    // }

}
