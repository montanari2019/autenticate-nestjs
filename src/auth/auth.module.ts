import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './stratgies/local-strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './stratgies/jwt.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserLoginHistoryModule } from 'src/user_login_history/user_login_history.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    UserLoginHistoryModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.EXPIRE_IN, },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
